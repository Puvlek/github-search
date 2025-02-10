export interface Repository {
    id: number
    stargazers_count: number
    forks: number
    full_name: string
    owner: {
        login: string,
        id: number,
        avatar_url: string,
    }
}

export interface RepositoriesList {
    total_count: number
    items: Repository[]
}