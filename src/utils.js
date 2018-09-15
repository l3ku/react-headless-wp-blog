import config from './app-config.js';

export default class Utils {
  static replace_asset_urls(data) {
    return data.replace(/\/wp-content\//g, config.WPSiteUrl + '/wp-content/');
  }
}
