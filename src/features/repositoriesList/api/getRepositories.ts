import axios from "axios"
import {RepositoriesList} from "features/repositoriesList/model/types/repository-type"

export const getRepositories = async (value: string, page: number, sort: string): Promise<RepositoriesList> => {
    const url = 'https://api.github.com/search/repositories'

    try {
        const response = await axios.get<RepositoriesList>(url, {
            params: {
                q: `{${value}}`,
                per_page: 30,
                page: page,
                sort: sort === 'No sorting' ? '' : sort.toLowerCase()
            }
        })
        return response.data
    } catch {
        return {
            total_count: 0,
            items: []
        }
    }
}