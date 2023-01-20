# Getting Started with Create React App

Notes:

asynchronous event handling:

* promises - i promise this will give you a value
* if we get a value and the promise resolves = .then
* if we do not get a value then we add a .catch
* e7 added a new function async await - gives us a new way to write our asynchronour code

const myPromise = new Promise((resolve, reject) => { 

if (false) {

    setTimeout(()) => {

    resolve('I have succeeded');

}, 1000);

} else {

    reject('I have failed');

});

myPromise

    .then(value => value + '!!!!!'); //this would be wrapped in a resolve promise (you can only call .then in a resolved promise - can do as many times as you want)

    .then(newValue => console.log(newValue));

    .catch(rejectValue => console.log(rejectValue));

\= control over what we want to do with asynchronous events if they do what they need to do


React = components and how and when they render and re-render

set state

console.log = synchronous = 1 by 1 by 1

set state = asynchronous = react batches different set state calls so it can decide the best way

what if i want to use the latest state?  = we can pass it a function / or a callback

state == current state

props deals with components

render and re-render, what is the order? Classes:

* constructor runs first - Always in any class = initialize the state (hey react theres going to be a state object for this component and this is the state values it should have)
* then render your initial component = what the ui for this component is going to be
* then component did mount = react is like ok ive run the constructor ive initialized the state and now I will render the initial ui - what it will mount on
* then update component so it setStates
* and then it will **re-render** again the moment the state changes (show the new info)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
