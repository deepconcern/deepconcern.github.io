import { createContext } from 'react';

import { Repository } from './repository';

export type RepositoriesData = {
    error: Error | null,
    fetchRepositories: () => void,
    loading: boolean,
    repositories: Repository[] | null,
}

export const RepositoriesContext = createContext<RepositoriesData>({
    error: null,
    fetchRepositories: () => {
        // No-op. Will be implemented in `RepositoriesProvider`.
    },
    loading: false,
    repositories: null,
});
