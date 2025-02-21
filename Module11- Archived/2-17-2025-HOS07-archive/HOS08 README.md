# HOP08 Navigation II
##  Learning Outcomes
1. Understand how to persist data.
2. Apply the data persistence to a navigation-based mobile apps.
3. Analyze the navigation-based mobile app regarding data persistence.
4. Evaluate the navigation-based mobile app regarding data persistence.
5. Create a navigation-based mobile app using data persistence.

## Resources
* [React Native in Action](https://learning.oreilly.com/library/view/react-native-in/9781617294051/?sso_link=yes&sso_link_from=cityu-seattle)
    * [Chapter 6. Navigation](https://learning.oreilly.com/library/view/react-native-in/9781617294051/c06.xhtml)
    * [Source Code - React Native in Action](https://github.com/dabit3/react-native-in-action)
    
* [React Navigation Org - Getting Started](https://reactnavigation.org/)
    * Stack-based Navigation
      * [Hello React Navigation](https://reactnavigation.org/docs/hello-react-navigation)
      * [Moving between screens](https://reactnavigation.org/docs/navigating)
      * [Passing parameters to routes](https://reactnavigation.org/docs/params)
    * Tab-based Navigation
      * [Minimal example of tab-based navigation](https://reactnavigation.org/docs/tab-based-navigation#minimal-example-of-tab-based-navigation)
    * Drawer-based Navigation
      * [Minimal example of drawer-based navigation](https://reactnavigation.org/docs/drawer-based-navigation#minimal-example-of-drawer-based-navigation)
    * [React Navigation - NavigationContiner](https://reactnavigation.org/docs/navigation-container/)

  * [npm - uuid](https://www.npmjs.com/package/uuid)

  *JavaScript
    * [JSON.stringfy()](https://www.w3schools.com/js/js_json_stringify.asp)
    * [JavaScript Merge Objects](https://www.scaler.com/topics/javascript-merge-objects/)

## Skills
* Node
  * node --version
  * npx --version
  * npm --version
* Expo
  * Create a mobile app
    * **expo init my-mobile-app**
    * **cd my-mobile-app**
  * Install Expo CLI
    * **npm install -g expo-cli**
  * Create your account in [Expo](https://expo.dev/)
  * Log in your Expo account
    * **expo login**
  * Update your dependencies
    * **npm install**
  * Start your Expo React native mobile app
     * **expo start --tunnel**

  * React Navigation
    * Install React Naviation.
      * React Navigation is made up of some core utilities and those are then used by navigators to create the navigation structure in your app.
      * **npm install @react-navigation/native**
    * Install dependencies into an Expo managed project
      * **npx expo install react-native-screens react-native-safe-area-context**
    * Install the tab-based navigation library.
      * **npm install @react-navigation/bottom-tabs**
    * Install the stack-based navigation library.
      * **npm install @react-navigation/native-stack**
    
  * [Async Stroage - Getting Started](https://react-native-async-storage.github.io/async-storage/docs/install/)
    * AsyncStorage is an unencrypted, asynchronous, persistent, key-value storage system that is global to the app. It should be used instead of LocalStorage.
    * With Expo CLI:
    * **npx expo install @react-native-async-storage/async-storage**
    * import AsyncStorage from '@react-native-async-storage/async-storage';

  * Upgrade expo sdk
    * **npx expo upgrade**

  * [I get the warning "Non-serializable values were found in the navigation state"](https://reactnavigation.org/docs/troubleshooting/#i-get-the-warning-non-serializable-values-were-found-in-the-navigation-state)
