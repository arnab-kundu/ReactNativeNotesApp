This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

## How to run
 - Clone this git repo
 - Run `cd ReactNativeNotesApp`
 - Run `npm i` to install all required node modules
 - add your SDK location in `local.properties` file for Android
 - Run `npm start` flowed by press `a` to run in Android
 - Run `cd ios` then `pod install` to install all pods for iOS
 - Run `npm start` flowed by press `i` to run in iOS

 ## How to check ReactNative environment setup
 - Run `react-native doctor` to diagonosis or fix any problem.

 ## How to create Release build in Android
 - Run `cd ReactNativeNotesApp`
 - Run `cd android`
 - Run `./gradlew assembleRelease` or `./gradlew assemblerelease`

 ## How to create a new project
 - Run `npx react-native@latest init <your_project_name>`
 - Project name should not contains any spaces.
 - Use camelcase or use underscore in your project name

 ## How to install or upgrade node modules
- Run `npm install` or `npm i` to install all node modules in `package.json`
- Run `npx npm-check-updates -u` to update all dependency versions in `package.json` and then `npm i` to install
- Run `npm audit`, `npm audit fix` or `npm audit fix -force`, `npm audit fix --force` to upgrade node modules
- Run `npm i react-native@latest --save` to add and install new node module dependency
- Search any node module here: https://www.npmjs.com/

## Screenshots

<img src="./screenshots/Screenshot_dashboard.png" alt="Dashboard" width="150"/> <img src="./screenshots/Screenshot_search.png" alt="Search" width="150"/> <img src="./screenshots/Screenshot_add_new.png" alt="Add new note" width="150"/> <img src="./screenshots/Screenshot_delete_view.png" alt="View and delete" width="150"/>
