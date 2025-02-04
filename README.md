# Simple Table Application

This is a simple application displaying a table with cells that change color when hovered. The application allows you to interact with a table by hovering over cells, with each cell displaying specific text.

## Application Structure

- **Table**: Displays the main table with cells.
- **TableCell**: Represents each individual cell inside the table.

## Available Commands

- **start**: `npm run lint && webpack serve --open`  
  Starts the development server and runs linting checks.

- **build**: `webpack`  
  Builds the production-ready bundle.

- **cypress:open**: `cypress open`  
  Opens the Cypress test runner in interactive mode.

- **cypress:run**: `cypress run`  
  Runs the Cypress tests in headless mode.

- **lint**: `eslint . --ext .js,.jsx,.ts,.tsx`  
  Runs linting on the source code.

- **lint:fix**: `eslint . --ext .js,.jsx,.ts,.tsx --fix`  
  Runs linting and automatically fixes any fixable issues.

- **format**: `prettier --write .`  
  Formats the code according to Prettier configuration.

## Docker

To run the application in a Docker container:

1. Build the Docker image:

```bash
docker build -t table-task .
```
