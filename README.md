# environment-setup
> brew install node
 
> brew install watchman
 
> sudo gem install cocoapods

Note: If you have already installed Node on your system, make sure it is Node 12 or newer.


To install a simulator, open Xcode > Preferences... and select the Components tab. Select a simulator with the corresponding version of iOS you wish to use.


# run-application at tmob root folder
> npm install

> cd ios/

> sudo install

> cd ..

> npx react-native run-ios

# If map or youtube api doesn't work
Open AppDelegate.m file
> [GMSServices provideAPIKey:@"_YOUR_API_KEY_"]; // replace with your API Key

Open src/service/index.js
> key: 'AIzaSyAFZwfVFZePmfDJaxavZgJfPsRhihQ8mCE', // replace with your API Key
