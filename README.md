# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Start WebApi Server/Client

1. Runs the web api server  
   Execute the web api project directly by Ctrl+F5  
   Base Url of web api after runs: https://localhost:44379  
   Swagger: https://localhost:44379/swagger/index.html

   Runs unit tests from TestProject

2. Runs client

   Runs npm i to restore package for client for the first time

   To run without web api server (Not able to post request through local server yet)  
   Modify .env file, set REACT_APP_BASE_URL="http://localhost:3333", point to json server endpoint

   open terminal: yarn server  
   open another terminal: yarn start

   To run with web api server, runs web api server first, and then  
   open terminal  
   yarn start

   Modify .env file, set REACT_APP_BASE_URL="https://localhost:44379/api/Products" , point to web api server endpoint

   Unit test: yarn test

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
