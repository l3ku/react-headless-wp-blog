var config = {
  // Blog author information.
  "authorName": "Leo Toikka",
  "authorHomePage": "https://leot.fi",

  // Blog title. Displayed in <title> and the page title in <h1>.
  "title": "My Devstories",

  // From which URL to fetch the posts (WP Site URL), e.g. https://yoursite.com, used in the WP REST
  // API request.
  "WPSiteUrl": "https://leot.fi",

  // Array of category ID's of the posts to retreive. If absent or empty array, all posts are
  // returned.
  "WPPostCategories": [6],

  // We don't want to run the API request on each page load, so it is cached to local storage.
  // Please provide a value here the cache expiry time in minutes (default is 15 min if value is absent).
  "WPPostCacheTimeout": 15,
};
export default config;
