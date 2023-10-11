### `npm install`

Write after cloning project

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Folder structure:

## common

Directory should be used for everything that isn't a module

## modules

Directory should be used by everything you feel should be a "module".

## src/modules/

Folder where we group all files related to the same feature (here, the authentication as "auth"), instead of splitting the "auth" code everywhere, it is now centralized into a single folder.

## src/pages/

Folder for a page or an API endpoint.

## /src/modules/auth

Everything related to the authentication.