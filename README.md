# scm-assignment

## `Install dependencies`

- Install node.js from `https://nodejs.org/en/`
- Install dependencies, by running `$ npm install`

### `Run Automation tests`

- To run the tests in Cypress, run: `$ ./node_modules/.bin/cypress open`  
- To run the tests in Cypress headless, run: `$ ./node_modules/.bin/cypress run` 

### `In case of Cypress error`

If Cypress gives an error and cannot open, run: `$ npx cypress install --force` to reinstall 

### `Thought analysis`

There is a main test which is running from the integration folder named `bookFlight.spec.js` and tests and confims the successfull booking of a flight. The test has 4 functions which are imported from `../objects/book-flight.js`. I also import a .json file from the fixtures folder, which I rename as `testData` and contains the data that will be submitted on the form. The idea here is that we can use the specific functions for other testcases as well, and if we need to change any values, we just change them where the functions are defined.  
