import React from "react";
import s from "./button.module.css"

type ButtonPropsType = {
    className?: string
    title: string
    onClick: () => void
    numberOfInterests?: number
    addNumberOfInterests?: () => void
}

export const Button = ({className, title, onClick, numberOfInterests}:ButtonPropsType) => {
    return(
        <button className={className} onClick={onClick}>
            {numberOfInterests !== undefined ? (
                <div className={s.sumOfInterests}>
                    <span>{title}</span>
                    {numberOfInterests > 0 && <span>{numberOfInterests}</span>}
                </div> ) : (title)
            }
            
        </button>
    )
}