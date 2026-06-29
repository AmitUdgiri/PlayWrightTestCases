# Playwright Basics

This folder contains a Playwright test setup for chapter 19.

## Setup

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npm run install-browsers
```

## Run tests

Run the full test suite:

```bash
npm test
```

Run tests in headed mode:

```bash
npm run test:headed
```

## Project files

- `playwright.config.ts` — Playwright configuration file
- `tests/example.spec.ts` — sample Playwright test
- `tsconfig.json` — TypeScript compiler settings
- `package.json` — project dependencies and scripts
