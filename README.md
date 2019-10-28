This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### Frontend case

This is the document on the project which was created based on different requirements mentioned in
the file.
The project is sent with a zip file along with the email which contains all the modules and code related to
the project.
To run the application:
1) Copy the zip file in your folder
2) Unzip the file
3) You can use any tools to open the project( Visual Studio Code is best out there)
4) Go inside the project (in this case: cd {copied location}\TestNovicell\novicell>)
5) And use terminal and enter ‘npm start’
Technology used
1) React
2) Redux (state management tool)
3) Thunk (mediator, that receives the store’s dispatch and dispatch synchronous actions)
4) Firebase (as database) --- I have made my own database in firebase with my account whose
configuration can be seen In ‘fbConfig.js’
5) Materialize CSS
Library used in React
1) npm install create-react-app
2) npm install react-router-dom
3) npm install redux
4) npm install react-redux
5) npm install redux-thunk
6) npm install firebase
7) npm install react-redux-firebase
8) npm install redux-firestore
9) npm install moment
10) npm install fast-sort
To deploy the project in firebase
1) npm install -g firebase-tools
2) firebase login
3) firebase init
4) npm run build
5) firebase deploy
