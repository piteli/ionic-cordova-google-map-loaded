# Installation
step 1 - install googlemap plugin in cmd/terminal
```
ionic cordova plugin add https://github.com/mapsplugin/cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="YOUR_ANDROID_API_KEY_IS_HERE" --variable API_KEY_FOR_IOS="YOUR_IOS_API_KEY_IS_HERE"
```

step 2 -install necessary googlemap plugin in cmd/terminal
```
npm install --save @ionic-native/core@latest @ionic-native/google-maps@latest
```

step 3 - install geolocation plugin in cmd/terminal
```
ionic cordova plugin add cordova-plugin-geolocation
```

step 4 install necessary geolocation plugin in cmd/terminal
```
npm install @ionic-native/geolocation
```

step 5 - install rest of packages in cmd/terminal
```
npm install
```

step 6 - run the app in android with
```
ionic cordova run android
```
