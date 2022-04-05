# cordova-ionic-vue-esptouch  
It is a cordova plug-in for esptouch networking with esp8266 and esp32, using the latest Espressif library, which can be used for ionic and cordova projects. Forked from coloz, added the wifi ssid and bssid fetching (tested on iOS only).

# espTouch lib  
android：0.3.7.0  
ios：0.3.7.0  
  
## Supported platforms  
ios 12.x 
android 5+ 

## Reference citations  
https://github.com/EspressifApp/LibEsptouchForIOS  
https://github.com/EspressifApp/LibEsptouchForAndroid  
https://github.com/EspressifApp/EsptouchForAndroid  
https://github.com/t2wu/cordova-plugin-smartconfig  
https://github.com/xumingxin7398/cordovaEsptouch  

## Forked from 
https://github.com/coloz/cordova-plugin-esptouch

## How to use  
### Installation  
Ionic capacitor 
```
npm install git@git.urgrow.io:front-end/plugins/cordova-esptouch.git
```
### Functions
```
function start(apSsid, apBssid, apPassword, deviceCountData, broadcastData, successCallback, failCallback) // starts broadcasting the credentials
function stop(successCallback, failCallback); // stops broadcasting
function getCurrentBSSID(successCallback, failCallback); // fetches wifi bssid from current connection
function getCurrentWiFiSsid(successCallback, failCallback); // fetches wifi ssid from current connection
```

### Example
```javascript
import * as esptouch from 'cordova-esptouch'

esptouch.start(ssid, "00:00:00:00:00:00", "myPassword", "1", "1", 
  res => { console.log(res) },
  err => { console.log(err) });
}

esptouch.stop(res => { console.log(res) }, err => { console.log(err) });

```
### Response
```json
{"bssid":"ffffffffffff","ip":"192.168.1.123"}
```

### Known issues  
When there are too many AP signals in the environment, the network pairing may fail, but this is not an issue with this plugin    
