import React, {Dispatch, FC, SetStateAction, useEffect, useRef, useState} from 'react'
import arrowDownIcon from '../../assets/icons/repositories/arrowDown.svg'
import cls from './select.module.css'

interface SelectProps {
    setSortingOption: Dispatch<SetStateAction<string>>
    sortingOption: string
}

const Select: FC<SelectProps> = ({setSortingOption, sortingOption}) => {

    const [isOpen, setIsOpen] = useState(false)
    const selectRef = useRef<HTMLDivElement>(null)

    const options = ["No sorting", "Stars", "Forks", "Updated"]

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, []);

    return (
        <div
            className={cls.selectWrapper}
            ref={selectRef}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cls.selectButton}
            >
                <p>{sortingOption}</p>
                <img src={arrowDownIcon} alt=""/>
            </button>
            {isOpen && (
                <ul className={cls.selectMenu}>
                    {options.map((option) => (
                        <li
                            key={option}
                            onClick={() => {
                                setSortingOption(option);
                                setIsOpen(false);
                            }}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Select;