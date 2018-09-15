import axios from 'axios';
import config from './app-config.js';

export default class WPRestAPI {
  static _localStoragePostsKey = 'wp-react-blog-cached-posts-content';
  static _localStorageTimeoutKey = 'wp-react-blog-cached-posts-timeout';

  static getPosts(callback) {
    // Prefer cached entries, however, retreive fresh data once in a while (default is 15 min,
    // however the user may specify other interval in app config).
    var cached = this._getPostsFromCache();
    if ( cached.length ) {
      callback(true, cached);
    } else {
      this._getPostsFromWPRestAPI(callback);
    }
  }

  static _getPostsFromCache() {
    var cachedPosts = [];

    // Check that the cached entries have not yet expired.
    var cacheExpires = localStorage.getItem(this._localStorageTimeoutKey);
    if ( cacheExpires ) {
      var currentTime = new Date().getTime();
      if ( currentTime < cacheExpires ) {
        var cachedData = localStorage.getItem(this._localStoragePostsKey);
        if ( cachedData ) {
          try {
            var parsedData = JSON.parse(cachedData);
            cachedPosts = parsedData;
          } catch (e) {
            // Do nothing as we can always fetch the valid JSON from upstream. This will just slow
            // down the application but should not affect functionality, we don't want that the
            // whole applications breaks due to this...
          }
        }
      }
    }
    return cachedPosts;
  }

  static _addPostsToCache(posts) {
    var cacheTimeoutMinutes = config.WPPostCacheTimeout ? config.WPPostCacheTimeout : 15;
    var cachedPosts = JSON.stringify(posts);
    var cacheExpires = new Date().getTime() + cacheTimeoutMinutes*60*1000;

    // Adding data to local storage may fail due to lack of space, so handle those errors.
    try {
      localStorage.setItem(this._localStoragePostsKey, cachedPosts);
      localStorage.setItem(this._localStorageTimeoutKey, cacheExpires);
    } catch (e) {
      console.log(e);
    }
  }

  static _getPostsFromWPRestAPI(callback) {
    var apiQuery = config.WPSiteUrl + '/wp-json/wp/v2/posts?_embed';
    if ( config.WPPostCategories ) {
      apiQuery += '&categories=' + config.WPPostCategories.join();
    }
    axios.get(apiQuery)
    .then(response => {
      var posts = response.data;
      this._addPostsToCache(posts);
      if ( callback ) {
        callback(true, posts);
      }
    }).catch(errors => {
      console.log(errors);
      if ( callback ) {
        callback(false, errors);
      }
    });
  }

  static _flushPostCache() {
    localStorage.removeItem(this._localStoragePostsKey);
    localStorage.removeItem(this._localStorageTimeoutKey);
  }
}
