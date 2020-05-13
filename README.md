# deepconcern.github.io

This is my personal website. You can visit it here: https://deepconcern.github.io.

## Configuration

You'll need to set the environmental variable `GITHUB_ACCESS_TOKEN` to a GitHub personal access token with a scope of at least `public_repo`, otherwise the fetching of repositories may be rate limited.

You can set environment variables inline, or by adding a `.env` file, which will be read.

## Running locally

To start the website, simply run the following:

```sh
# Install dependencies
yarn

# Start the dev server
yarn start
```

## Building 

To build the website, simply run the following:

```sh
# Install dependencies
yarn

# Builds the JS assets and copies the images over to the public directory
yarn build
```
