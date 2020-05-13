#!/usr/bin/env node

const { config } = require('dotenv');
const { writeFileSync } = require('fs');
const { resolve } = require('path');
const { Octokit } = require('@octokit/rest');

config();

const GITHUB_USERNAME = 'deepconcern';
const ROOT_DIR = resolve(__dirname, '..');
const DATA_FILE = 'repository-data.json';
const DATA_PATH = resolve(ROOT_DIR, DATA_FILE);

const fetchRepositoryData = async () => {
    const octokit = new Octokit({
        auth: process.env.GITHUB_ACCESS_KEY,
    });

    console.log(`Fetching repositories for user "${GITHUB_USERNAME}"...`);

    const { data } = await octokit.repos.listForUser({
        username: GITHUB_USERNAME,
        type: 'owner',
    });

    const repositories = await Promise.all(data.map(repo => {
        return octokit.repos.getAllTopics({
            repo: repo.name,
            owner: GITHUB_USERNAME,
        }).then(response => {
            const data = response.data;

            return {
                description: repo.description,
                name: repo.name,
                url: repo.url,
                topics: data.names,
            };
        });
    }));

    console.log('Fetching done!');

    const repositoryData = {
        repositories, 
    };

    console.log(`Writing data to file "${DATA_PATH}"`);

    writeFileSync(DATA_PATH, JSON.stringify(repositoryData, null, 2));

    console.log('Writing done!');
};

fetchRepositoryData();
