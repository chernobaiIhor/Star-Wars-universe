# star-wars-universe

This is a React project scaffolded with Vite, a fast development build tool for modern web apps. Below, you'll find information about the project's dependencies, scripts, and configuration.

# Dependencies
- react (^18.2.0) - A JavaScript library for building user interfaces.
- react-dom (^18.2.0) - Provides the DOM-specific methods needed to render React components.

# Styling
- @emotion/react (11.11.1) - A library for writing CSS styles with JavaScript.
- @emotion/styled (11.11.0) - A styled-components implementation for Emotion.
- styled-components (5.3.11) - A popular CSS-in-JS library for styling React components.
- @mui/material (5.14.11) - Material-UI's core components for React.
- @mui/styled-engine-sc (5.14.11) - The styled-components engine for Material-UI.
- @mui/icons-material (5.14.11) - Material-UI icons.
- @fontsource/roboto (5.0.8) - Font source for the Roboto typeface.

# Data Fetching
- axios (1.5.1) - A promise-based HTTP client for making requests to APIs.
- query-string (7.1.1) - A library for parsing and formatting query strings.

# State Management
- react-query (3.39.3) - A library for managing and synchronizing server state in React applications.

# Routing
- react-router-dom (6.16.0) - A library for adding routing functionality to your React applications.

# Miscellaneous
- react-toast (1.0.3) - A library for displaying toast notifications.
- vite - A fast development build tool.
- husky - A tool for running scripts on Git hooks.
- eslint-plugin - ESLint plugin for linting JavaScript and TypeScript code.

# Setup

Requires [Node.js](https://nodejs.org/) v18+ to run.

```sh
nvm use
npm i
npm run dev
```
Should be running on http://localhost:3000 by default.

Install the dependencies and devDependencies and start the server.
- dev: Start the development server using Vite.
- build: Build the project using TypeScript and Vite.
- lint: Run ESLint to lint TypeScript and JavaScript files in the src directory.
- lint:fix: Run ESLint with the --fix flag to automatically fix linting issues in src files.
- preview: Preview the production build using Vite.

# Git Hooks and Pre-commit
The project is configured to run lint-staged on pre-commit. This means that before each commit, ESLint will automatically run on the staged TypeScript and JavaScript files in the src directory to ensure code quality.

# Configuration
- The ESLint configuration is set up to enforce code quality standards.
- TypeScript is used for type checking and compiling the code.
- Vite is used for development and building the project.
- Material-UI is used for styling components with a Material Design look and feel.
