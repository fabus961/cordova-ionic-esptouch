declare module 'cordova-esptouch' {
    export function start(apSsid, apBssid, apPassword, deviceCountData, broadcastData, successCallback, failCallback)
    export function stop(successCallback, failCallback);
    export function getCurrentBSSID(successCallback, failCallback);
    export function getCurrentWiFiSsid(successCallback, failCallback);
}
