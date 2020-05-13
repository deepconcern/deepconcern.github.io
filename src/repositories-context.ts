import { createContext } from 'react';

import { Repository } from './repository';

export const RepositoriesContext = createContext<Repository[]>([]);
