# Next.js front end

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It is used as a front end web app for our sample project.

## Development instructions

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

### Installing dependencies

To download all of the required package dependencies, run `npm install` in a terminal in this directory. This needs to be done when your environment is set up for the first time, or after packages get changed or updated.

For running end-to-end tests using [Playwright](https://playwright.dev/), you might also need to run `npx playwright install` and `npx playwright install-deps`.

### Starting the local development server

To start the local development server, use the following command:

```shell
npm run dev
```

You can access the web app by opening [`http://localhost:3000`](http://localhost:3000) in your browser.

### Running unit and integration tests

To run unit tests using [Vitest](https://vitest.dev/), use the `npm test` command.

To run end-to-end tests using [Playwright](https://playwright.dev/), do `npm run test:e2e`. The results of the test run can be viewed in the browser by first running `npx playwright show-report`.
