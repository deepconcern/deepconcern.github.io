export type Repository = {
    description: string | null,
    homepageUrl: string | null,
    name: string,
    repositoryTopics: {
        nodes: {
            topic: {
                id: string,
                name: string,
            },
        }[],
    },
    url: string,
};
