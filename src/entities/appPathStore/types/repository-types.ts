export interface Repository {
    id: number
    stargazers_count: number
    forks: number
    full_name: string
    description: string
    created_at: string
    updated_at: string
    archived: boolean
    language: string
    owner: {
        login: string,
        id: number,
        avatar_url: string,
    }
}