import React, { FC, Reducer, useCallback, useReducer } from 'react';
import { Octokit } from '@octokit/rest';

import { RepositoriesContext, RepositoriesData } from './repositories-context';
import { Repository } from './repository';

const GITHUB_USERNAME = 'deepconcern';

type RepositoriesState = {
    error: Error | null,
    hasFetched: boolean,
    isFetching: boolean,
    repositories: Repository[] | null,
};

const initialState: RepositoriesState = {
    error: null,
    isFetching: false,
    hasFetched: false,
    repositories: null,
};

type Action<TType, TData> = {
    type: TType,
    data: TData,
};

type FetchInitiatedAction = Action<'FETCH_INITIATED', null>;
type FetchSucceededAction = Action<'FETCH_SUCCEEDED', Repository[]>;
type FetchFailedAction = Action<'FETCH_FAILED', Error>;

type RepositoriesAction = FetchInitiatedAction | FetchSucceededAction | FetchFailedAction;

const repositoriesReducer = (state: RepositoriesState, action: RepositoriesAction): RepositoriesState => {
    switch(action.type) {
        case 'FETCH_INITIATED': {
            return {...state,
                isFetching: true,
            };
        }
        case 'FETCH_SUCCEEDED': {
            return {...state,
                isFetching: false,
                hasFetched: true,
                repositories: action.data
            }
        }
        case 'FETCH_FAILED': {
            return {...state,
                error: action.data,
                isFetching: false,
                hasFetched: false,
            }
        }
    }
};

const octokit = new Octokit({
    auth: process.env.GITHUB_ACCESS_TOKEN,
});

export const RepositoriesProvider: FC = React.memo(({ children }) => {
    const [{
        error,
        isFetching,
        hasFetched,
        repositories,
    }, dispatch] = useReducer<Reducer<RepositoriesState, RepositoriesAction>>(repositoriesReducer, initialState);

    const fetchRepositories = useCallback((): void => {
        if (isFetching || hasFetched) {
            return;
        }

        dispatch({
            type: 'FETCH_INITIATED',
            data: null,
        });

        octokit.repos.listForUser({
            username: GITHUB_USERNAME,
            type: 'owner',
        }).then(response => {
            const data: { description: string, name: string, url: string}[] = response.data;
            return Promise.all(data.map(repo => {
                return octokit.repos.getAllTopics({
                    repo: repo.name,
                    owner: GITHUB_USERNAME,
                }).then(response => {
                    const data: { names: string[] } = response.data;

                    return {
                        description: repo.description,
                        name: repo.name,
                        url: repo.url,
                        topics: data.names,
                    };
                });
            })).then(responses => {
                dispatch({
                    type: 'FETCH_SUCCEEDED',
                    data: responses,
                });
            })
        }).catch(reason => {
            dispatch({
                type: 'FETCH_FAILED',
                data: Error(reason),
            });
        });
    }, [isFetching, hasFetched]);

    const repositoriesData: RepositoriesData = {
        error,
        fetchRepositories,
        loading: isFetching,
        repositories,
    };

    return (
        <RepositoriesContext.Provider value={repositoriesData}>
            {children}
        </RepositoriesContext.Provider>
    );
});
