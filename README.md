### React Tutorial
#### Testing React
- built in testing
- these are unit tests
- Jest test runner
- Enzyme with Adapter
  - `__test__` directory
  - `it()` block
  - `expect()` and `toEqual()` etc
  - use `beforeEach()` to create common components and criteria for test
  - use `afterEach()`
  - use `describe()` to consoliate similar code for related tests in isolation - call before and after inside
- make `.env` file and set `NODE_PATH=src/` and use absolute paths inside src directory
- test action creators and reducers
- use `props.children` to turn Provider into a wrapper called Root.js here
- redux-promise - middleware for redux for async actions aka promises
- moxios
- integration test - for the data fetching - testing many parts of app

#### Higher Order Components
- files start lowercase due to being a function
- boilerplate

#### Middleware For Redux
- rebuilt redux promise
- JSON schema to validate state

#### Authentication
- used mongodb atlas
- install RoboMongo GUI
- built JWT authentication server
- middleware that requires JWT to view
- build simple front end with redux to utilize server