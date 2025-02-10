export interface RepositoryCardProps {
    stargazers_count: number
    forks: number
    full_name: string
    owner: {
        login: string
        id: number
        avatar_url: string
    }
}