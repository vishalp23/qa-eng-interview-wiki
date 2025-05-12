# Technical Assessment for QA Engineer at Ranger

## Overview

In this exercise, you will work with Playwright (written in TypeScript) to create and complete three automated tests for Wikipedia.

You’ll start by implementing a login test from scratch, then finish two existing tests that were partially generated using Ranger’s test recorder and code generation tool.

This should

## Your Task

1. Implement a login test and capture the storage state so the remaining tests run as a logged in user
    - In `login.test.ts`, create a test that signs into Wikipedia
    - Create an account if you don't already have one
    - Add your sign in credentials to `.env`
2. Complete the Wikipedia search test
    - In `searchWikipedia.ts`, finish the existing test so that it correctly implements the test case in the file
3. Complete the Wikipedia home page actions test
    - In `wikipediaHomepageActions.ts`, finish the existing test so that it correctly implements the test case in the file
4. Please record a two minute Loom video (loom.com) walking through the code and showing a successful execution of the code. Please also add one minute as to why you want to work at Ranger (ranger.net)
    - Please update this README and add a link to the loom video here: 'https://www.loom.com/share/65cb8d61bf134e9ebbd58a5e79dac3f9?sid=71c6650b-590d-4ba8-8ae3-fb22bec862d7'
    -Why I want to work at Ranger: 'https://www.loom.com/share/b2e6bfd992b74d15a951ac23037f6060?sid=a9b1b410-b840-4bbc-9a36-174f1603d064'


Each test file contains more detailed instructions.

Make sure that the only files that you edit are `login.test.ts`, `searchWikipedia.ts`, and `wikipediaHomepageActions.ts`.

## Project Structure

```plaintext
├── README.md
├── package.json
├── package-lock.json
├── playwright.config.ts
├── .env
└── src
    └── lib
        ├── all.test.ts
        ├── login.test.ts
        ├── tests
        │   ├── searchWikipedia.ts
        │   └── wikipediaHomepageActions.ts
    └── auth
        └── login.json
```

## Setup

### Requirements

-   Node.js v22+
-   npm

### Quick Start

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

### Running Tests

#### Run all tests

There's a `test` script in `package.json` so you can do:

```bash
npm run test
```

#### Run a specific test

Add `.only` to the specific test you want to run in isolation in `all.test.ts` and then run the same command:

```bash
npm run test
```
