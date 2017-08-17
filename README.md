# CTM Reac Redux Word Count Prime

> An React-Redux Webpack project to read data from a text file and identify if the repeat of the word is prime or not

### Installation

```
$ npm install
```

Install all dependencies by running NPM command. All the dependencies are required for the app server and client 

### Dependencies
* Node ^6.0
* Npm ^3.0

### Repository
This project is currently stored publicly on GitHub: [https://github.com/ethannguyens/ctm](https://github.com/ethannguyens/ctm)

### Development Mode
```
$ npm run start
```
This will enable webpack watch, hot module reloading, linting watch and test watch. This allows developer develop with instant result from the browser thanks to hot module reloading
The task will automatically open the page  [http://localhost:3000](http://localhost:3000)
The bundle version of development contaun source map allow developer to debug.

### Deployment Mode
```
$ npm run build
```
This will bundle up our application and put it in the dist folder and ready to deploy.
The task will automatically open the page  [http://localhost:3000](http://localhost:3000)
This bundle version is minified without source mapping to reduce the size of the app to minimal.
As an addition, this project as already been deployed to [Heroku](https://gary-stevens-ctm-test.herokuapp.com) so that you may see it in action.

### Raw data
Raw Data - a JSOM object that contain all the words can be access by open the page [http://localhost:3000/data](http://localhost:3000/data) after the application is up running.

### Solution Approach
#### Webpack
`Webpack` is used to bundle all of the files of this project (js, jsx, scss, json...). Javascipt file is transpile using babel before bundling.
There 2 separate configurations, 1 for development with hot module reloading, source map. One for deployment with `uglify` and no source mapping

#### React-Redux
`React` is used to build the components and `Redux` to manage the application states.
For the scale of this project Redux is rather an over engineering. However, for demonstration of my love for it and the scalability of the project.

#### Yes Babel - No Jquery
Jquery is rather a heavy and non optimized library. 
Instead, I develop the application using the latest ES6 and its best practice following with the Airbnb Styleguide. 
The code is then transpile using `babel` to support older browser as well execute new ES6 functionalities in the non-support environment

#### Yes NPM - No Task Runner (Gulp, Grunt)
For the small to medium size project task runners are not necessary.
On the other hand, `NPM` scripts allow us to specify all the tasks runner I want

#### Dom structure
I follow the **BEM** syntax in naming the elements classes. The generated dome is rather clean and human readable which result in easy styling.

#### Styling
 * Grid: a simple Grid system is used for responsive design
 * SASS: sass is used to structure and styling

### Unit tests
For the demonstration used both **TDD** and **BDD** in this project. For the server side I use **TDD**. On the client side - `React` namely I used BDD
  *  All tests are written in ES6 and are transpiled before running
  * `nock` is used to mock HTTP request
  * `enzyme` is to help assert, manipulate, and traverse react components
  * `mocha` as test runner
  * `jsdom` is used to construct the fake DOM

### Future Improvements
Due to the time scale of this project, these following improvements can be made:
  * `webpack` for hashing the bundle version for deploying to CDN.
  * Unit test run on the browser instead of on `node`.
  * User acceptance with **Webdriverio** **Selenium** on local browser or **SauceLabs**
  * **GitHook** to enforce code standard on commit.

#### App Deployment - Measurements
| Asset        | Load time | Size  |
| ------------ |:----------|-------|
| HTML         | 1ms   	|369B  |
| bundle JS       | 29.5ms      |95.7KB  |
| Total        | 30ms     | 96KB |

#### App Deployment - Data Processing
This is the measure for processing time of the [http://www.loyalbooks.com/download/text/Railway-Children-by-E-Nesbit.txt](http://www.loyalbooks.com/download/text/Railway-Children-by-E-Nesbit.txt)
Direct access through [http://localhost:3000/data](http://localhost:3000/data)

| Asset        | Load time | Size  |
| ------------ |:----------|-------|
| JSON       | 84.14ms      |24.6KB  |
| Total        | 84.14ms     | 24.6KB |



