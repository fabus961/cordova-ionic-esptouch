// var exec = require('cordova/exec');

module.exports = {
  start: function (apSsid, apBssid, apPassword, deviceCountData, broadcastData, successCallback, failCallback) {
    cordova.exec(successCallback, failCallback, "esptouch", "start", [apSsid, apBssid, apPassword, deviceCountData, broadcastData]);
  },
  stop: function (successCallback, failCallback) {
    cordova.exec(successCallback, failCallback, "esptouch", "stop", []);
  },
  getCurrentBSSID: function (successCallback, failCallback) {
    cordova.exec(successCallback, failCallback, "esptouch", "getCurrentBSSID", []);
  },
  getCurrentWiFiSsid: function (successCallback, failCallback) {
    cordova.exec(successCallback, failCallback, "esptouch", "getCurrentWiFiSsid", []);
  }
}