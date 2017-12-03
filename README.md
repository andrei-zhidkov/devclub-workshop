# Devclub frontend workshop

## Installation
* Clone the project from github: `git clone git@github.com:andrei-zhidkov/devclub-workshop.git`
* cd into the project directory: `cd devclub-workshop`
* Install dependencies: `npm install`

## Running
* Start the devserver: `npm start`
* Visit the running app at [http://localhost:3000](http://localhost:3000).

## Building
* Run `npm run build` command
* Use the contents of `/build` folder as you wish.

## Project structure basics
With `create-react-app`, all your dev-dependencies and configs are hidden behind `react-scripts` package.

### `package.json`
`package.json` lists all third-party dependencies that are installed in the project, along with the versions that should be used.

### `public/index.html`
Template that HTMLWebpackPlugin will use to generate actual index.html file.

### `src/index.js`
Application entry point.

### `src/App.js`
Root React component.

### `src/App.test.js`
Tests.

### `src/store`
Store directory.

### `src/components`
Components directory.

## Project websites
* [Node.js](https://nodejs.org) - Javascript engine
* [Webpack](https://webpack.js.org) - Package bundler
* [Babel](https://babeljs.io) - Modern JS -> ES5 compiler
* [React](https://reactjs.org) - Rendering library
* [Redux](https://redux.js.org) - State management library
* [Jest](https://facebook.github.io/jest/) - A testing platform for JavaScript

## Misc
* [JavaScript Promises: an Introduction](https://developers.google.com/web/fundamentals/primers/promises).
* [Introduction to fetch](https://developers.google.com/web/updates/2015/03/introduction-to-fetch) - A guide to modern network requests API.
* [MobX](https://mobx.js.org/index.html) - Another popular state management lib. A bit less popular, but much simpler than Redux.
* [Yarn](https://yarnpkg.com/en/) - A nicer `npm` replacement.
* [RealWorld example apps](https://github.com/gothinkster/realworld), [React/Redux RealWorld example app](https://github.com/gothinkster/react-redux-realworld-example-app)(including a nice [wiki](https://github.com/gothinkster/react-redux-realworld-example-app/wiki)) and a [RealWorld app implementation instructions](https://github.com/gothinkster/realworld-starter-kit/blob/master/FRONTEND_INSTRUCTIONS.md), in case you'd like to write one yourself.
* [egghead.io](https://egghead.io) - A cool learning platform, has a lot of awesome lessons on front-end development ([including one on Redux, done by its author](https://egghead.io/courses/getting-started-with-redux)).
