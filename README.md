# Arthur's Typescript Boilerplate
The foundations and style I like to use on Typescript Playwright projects

## The pattern
Basically, BaseObject.ts will have a main class with the most common things page do in the system under test.

- All page objects are descendants of BaseObject
- All page objects's `waitForReady` method will do whatever they need to do in order for waiting for the page to be ready for automation interaction
- Leverage `initiateAndReady` to return a ready to use page object when writing test code

## Installation and usage
```
npm ci
npx playwright install
npx playwright test #you can add ` -- --ui` to see the playwright ui
 npx playwright show-report
 ```
