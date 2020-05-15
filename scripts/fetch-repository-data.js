#!/usr/bin/env node

const { config } = require('dotenv');
const { writeFileSync } = require('fs');
const { resolve } = require('path');
const { createTokenAuth } = require('@octokit/auth-token');
const { graphql } = require('@octokit/graphql');
const { RequestError } = require('@octokit/request-error');

config();

const GITHUB_USERNAME = 'deepconcern';
const ROOT_DIR = resolve(__dirname, '..');
const DATA_FILE = 'repository-data.json';
const DATA_PATH = resolve(ROOT_DIR, DATA_FILE);

const fetchRepositoryData = async () => {

    console.log(`Fetching repositories for user "${GITHUB_USERNAME}" using token "${process.env.GITHUB_ACCESS_KEY}"...`);

    const auth = createTokenAuth(process.env.GITHUB_ACCESS_KEY);

    const deepConcernRepositoriesData = await graphql.defaults({
        owner: GITHUB_USERNAME,
        request: {
            hook: auth.hook,
        },
    })(`
        query DeepConcernRepositories {
            viewer {
                repositories(affiliations: [OWNER], first: 50) {
                    nodes {
                        description
                        homepageUrl
                        name
                        repositoryTopics(first: 50) {
                            nodes {
                                topic {
                                id
                                name
                                }
                            }
                        }
                        url
                    }
                }
            }
        }
    `);

    console.log('Fetching done!');

    console.log(`Writing data to file "${DATA_PATH}"`);

    writeFileSync(DATA_PATH, JSON.stringify(deepConcernRepositoriesData, null, 2));

    console.log('Writing done!');
};

fetchRepositoryData().catch(reason => {
    if (reason instanceof RequestError) {
        console.error(`${reason.name}: ${reason.status}`)
    } else {
        console.error(reason);
    }
});
