# cordova-esptouch  
It is a cordova plug-in for esptouch networking with esp8266 and esp32, using the latest Espressif library, which can be used for ionic and cordova projects. This is a problem of the official esp module, which has existed for a long time and has not been solved by the official.

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


### Example
```javascript
import * as esptouch from 'cordova-esptouch'

esptouch.start(ssid, "00:00:00:00:00:00", password, "1", "1", 
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
