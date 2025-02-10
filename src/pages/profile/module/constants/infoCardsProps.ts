import {InfoCardProps} from "pages/profile/module/types/info-card-props";
import starIcon from "assets/icons/repositories/star.svg"
import branchIcon from "assets/icons/repositories/branch.svg"
import archiveIcon from 'assets/icons/repositories/archive.svg'
import langIcon from "assets/icons/repositories/lang.svg"
import folderIcon from "assets/icons/repositories/folder.svg"
import changeIcon from "assets/icons/repositories/change.svg"
import {Repository} from "entities/appPathStore/types/repository-types";

export const InfoCardsProps = (repository: Repository): InfoCardProps[] => {
    return [
        {
            title: 'Количество звезд',
            svg: starIcon,
            value: repository.stargazers_count
        },
        {
            title: 'Количество форков',
            svg: branchIcon,
            value: repository.forks
        },
        {
            title: 'В архиве',
            svg: archiveIcon,
            value: repository.archived
        },
        {
            title: 'Язык',
            svg: langIcon,
            value: repository.language
        },
        {
            title: 'Создано',
            svg: folderIcon,
            value: repository.created_at
        },
        {
            title: 'Изменено',
            svg: changeIcon,
            value: repository.updated_at
        },
    ]
}