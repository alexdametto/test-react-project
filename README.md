# Test React Project

> [!WARNING]
> This repo is a POC to test the creation of a [react component library](https://github.com/alexdametto/test-react-library). This repo is the react project that imports that library.

To run the following app just:

1. Modify the `.npmrc` and add the following line:

```
//npm.pkg.github.com/:_authToken=YOUR_TOKEN
```

2. Run `yarn install`
3. Run `yarn start`

The library components are used in `App.jsx` file.

## Note

The project is importing a react component library that has not been transpiled! To handle this, we need to:

1. Edit the `craco.config.js` in order to customize the `babel-loader` section to resolve out custom library

```
const cracoBabelLoader = require("craco-babel-loader");

module.exports = {
  plugins: [
    ...
    {
      plugin: cracoBabelLoader,
      options: {
        includes: [
          resolvePackage("node_modules/@alexdametto/test-react-library"),
        ],
      },
    },
    .-..
  ],
};
```

2. Edit the `tailwind.config.js` to avoid tailwind purging classes that are in our custom library.

```
content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    ...
    // We need to avoid tailwind purge for our library!
    "./node_modules/@alexdametto/test-react-library/**/*.{js,jsx,ts,tsx}",
  ],
```
