# HOS01 - Cloud-Based Development Environment
##  Learning Outcomes
1. Understand a cloud-based development environment (Codesapces) and an open-source platform for making universal native apps with JavaScript and Reac (Expo). 
2. Apply Codespaces and Expo to a simple React Native mobile app.
3. Analyze the simple React Native mobile app.
4. Evaluate a cloud-based React Native mobile app development environment.
5. Create a React Native mobile app using Codespaces, Expo, and Reactive Native.

## Resources
* CDE (Cloud Development Environment)
  * Repository - [GitHub Get Started](https://docs.github.com/en/get-started)
  * Docker Container - [GitHub Codespaces](https://docs.github.com/en/codespaces)
  * Docker Container & Mobile App Platform - [GitHub Codespaces - Developing and testing React Native apps just with Expo and Codespaces](https://dev.to/github/github-codespaces-developing-and-testing-react-native-apps-just-with-expo-and-codespaces-39g)
  * Mobile App Platform - [Expo - Tutorial](https://docs.expo.dev/tutorial/introduction/)
    * [Expo CLI](https://docs.expo.dev/workflow/expo-cli/)
    * [Expo Go](https://expo.dev/client)
    * [Expo Snack](https://docs.expo.dev/workflow/snack/)
  * Cloud IDE - [VSCode for the Web](https://code.visualstudio.com/docs/editor/vscode-web)
* Server-Side JavaScript Engine - [Node - Getting Started](https://nodejs.dev/en/learn/)
* Bash Shell Commands - [16 Bash Commands Data Scientists Must Know](https://builtin.com/data-science/bash-commands)
* Markup Language for README.md - [Markdown Guide - Getting Started](https://www.markdownguide.org/getting-started/)

* React Native Components
  * [React Native - Text](https://reactnative.dev/docs/text)
  * [React Native - View](https://reactnative.dev/docs/view)
  * [React Native - StyleSheet](https://reactnative.dev/docs/stylesheet)
* Expo Status Bar
  * [Expo StatusBar](https://docs.expo.dev/versions/latest/sdk/status-bar/)
* React Styles & CSS (Cascading Style Sheet)
  * [CSS - flex](https://www.w3schools.com/cssref/css3_pr_flex.php)
  * [CSS - background-color](https://www.w3schools.com/cssref/pr_background-color.php)
  * [CSS - justify-content](https://www.w3schools.com/cssref/css3_pr_justify-content.php#:~:text=Definition%20and%20Usage,to%20align%20the%20items%20vertically.)
  * [CSS - align-items](https://www.w3schools.com/cssref/css3_pr_align-items.php)
* JavaScript
  * [JavaScript - import & export](https://www.w3schools.com/js/js_modules)
  * [JavaScript - function](https://www.w3schools.com/js/js_functions.asp)
  * [React ES6 Variables - const vs. let](https://www.w3schools.com/react/react_es6_variables.asp)
* Comment Statement
  * [React Native or React Comment Statement](https://aboutreact.com/react-native-comments/)
  * [JavaScript Comment Statement](https://www.w3schools.com/js/js_comments.asp)
  * [CSS Comment Statement](https://www.w3schools.com/css/css_comments.asp)

## Skills
  * Create your account in [Expo](https://expo.dev/)
  * In your Codesapces
    * Log in your Expo account
      * npx expo login
    * Test your node environment
      * node --version
      * npx --version
      * npm --version

  * Creating an Expo react native mobile app. (Assume your mobile app name is my-mobile-app. Youc an use any app name.)
    * npx create-expo-app my-mobile-app
    * cd my-mobile-app
    * npx expo start --tunnel
      * (If both your computer and your smartphone are connected in the same network, you can type "expo start." But "--tunnel" is preferred to reduce any network errors.)
