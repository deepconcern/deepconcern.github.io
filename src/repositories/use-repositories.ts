import { useContext, useEffect } from 'react';

import { RepositoriesContext } from './repositories-context';
import { Repository } from './repository';

export type Repositories = {
    error: Error | null,
    loading: boolean,
    repositories: Repository[] | null,
};

export const useRepositories = (): Repositories => {
    const { error, fetchRepositories, loading, repositories } = useContext(RepositoriesContext);

    useEffect(() => {
        fetchRepositories();
    }, []);

    return {
        error,
        loading,
        repositories,
    };
};
