# webpack-ava-recipe
An example project demonstrating how to setup webpack to compile test files before passing them to ava to be run.

## Why run webpack on your tests?
Ava is a great test runner but if you require your code to go through some form of pre-compile step it will either not work at all or require further configuration. For example say you are using react and .jsx files. Ava has a decent solution where you would [add the module 'babel-register' as a startup require](https://github.com/avajs/ava/blob/master/docs/recipes/babelrc.md). This works great but as your project expands you might run into the situation were your test runtimes start to increase more rapidly than you would expect. This occurs because when Ava runs the tests it loads 'babel-register' on each test process which will compile your code on each test run. Usually the cost of compiling can be mitigated through file watch caching, on save only the module/file edited will need to be re-compiled. Unfortunately, while `ava --watch` does a good job of caching the test sources, since it relies on 'babel-register' for the compiling step it does not do any compiling caching. This is where webpack comes in, run independently it has caching support and will cut down your codes re-compile times whenever you want to run your tests.

Another advantage is that webpack will support any file extension that you need while [currently Ava does not](https://github.com/avajs/ava/issues/631).

## Disadvantages
Ava by itself can find all Ava tests in your source files and run them. With the approach detailed in this project you have to have a 'tests.js' file that imports all of your test files so that they will be compiled together.

## Usage
`npm test` - Compile and run your tests

`npm run watch:test` - Compiles your tests whenever the source changes and runs them as well

*I am on windows so my watch command here is probably not ideal for other platforms, `webpack --watch & ava --watch &` might work on linux but I am not sure.*
