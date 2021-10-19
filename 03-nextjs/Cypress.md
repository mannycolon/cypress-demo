# Cypress

Cypress is a test runner used for End-to-End (E2E) and Integration Testing. Check [Next.js Testing](https://nextjs.org/docs/testing#quickstart-1) for more.

## Setup

To get started with Cypress, install the `cypress` package:

```bash
  npm install --save-dev cypress
```

Add Cypress to the `package.json` scripts field:

```json
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "cypress": "cypress open",
  }
```

Run Cypress for the first time to generate examples that use their recommended folder structure:

```bash
  npm run cypress
```

You can look through the generated examples and the [Writing Your First Test](https://docs.cypress.io/guides/getting-started/writing-your-first-test) section of the Cypress Documentation to help you get familiar with Cypress.

## Creating your first Cypress integration test

Assuming the following two Next.js pages:

```js
// pages/index.js
import Link from 'next/link'

export default function Home() {
  return (
    <nav>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  )
}
```

```js
// pages/about.js
export default function About() {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  )
}
```

Add a test to check your navigation is working correctly:

```js
// cypress/integration/app.spec.js

describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="about"]').click()

    // The new url should include "/about"
    cy.url().should('include', '/about')

    // The new page should contain an h1 with "About page"
    cy.get('h1').contains('About Page')
  })
})
```

You can use `cy.visit("/")` instead of `cy.visit("http://localhost:3000/")` if you add `"baseUrl": "http://localhost:3000"` to the `cypress.json` configuration file.

## Running your Cypress tests

Since Cypress is testing a real Next.js application, it requires the Next.js server to be running prior to starting Cypress. We recommend running your tests against your production code to more closely resemble how your application will behave.

Run `npm run build` and `npm run start`, then run `npm run cypress` in another terminal window to start Cypress.

> Note: Alternatively, you can install the `start-server-and-test` package and add it to the `package.json` scripts field: `"test": "start-server-and-test start http://localhost:3000 cypress"` to start the Next.js production server in conjuction with Cypress. Remember to rebuild your application after new changes.

## Getting ready for Continuous Integration (CI)

You will have noticed that running Cypress so far has opened an interactive browser which is not ideal for CI environments. You can also run Cypress headlessly using the `cypress run` command:

```json
// package.json

"scripts": {
  //...
  "cypress": "cypress open",
  "cypress:headless": "cypress run",
  "e2e": "start-server-and-test start http://localhost:3000 cypress",
  "e2e:headless": "start-server-and-test start http://localhost:3000 cypress:headless"
}
```

You can learn more about Cypress and Continuous Integration from these resources:

- [Cypress Continuous Integration Docs](https://docs.cypress.io/guides/continuous-integration/introduction)
- [Cypress GitHub Actions Guide](https://on.cypress.io/github-actions)
- [Official Cypress Github Action](https://github.com/cypress-io/github-action)
