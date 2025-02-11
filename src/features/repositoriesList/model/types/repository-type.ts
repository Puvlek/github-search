import {Repository} from "entities/appPathStore/types/repository-types";

export interface RepositoriesList {
    total_count: number
    items: Repository[]
}