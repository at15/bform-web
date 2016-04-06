# bform-web
The front end SPA (Single Page Application) for bform

## Project structure

The project did not use existing seed projects because

- it does not need to concern load speed
- it does not need to have tests, both unit and e2e
- livereload is not needed

so it does not need `loader` like `webpack`, it will have the following functionality

- watch and compile ts and sass

It does not meet the best practices, but it can have things up and running and is easy to understand.

## Develop

- `npm run postinstall` to install `typings`