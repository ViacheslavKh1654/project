import { title } from "process";
import React from "react";

type PropsTypeBtnUniversal = {
    onClick: () => void
    className: string
    title: string
  
}

export const ButtonUniversal = ({onClick, className, title}: PropsTypeBtnUniversal) => {
    return(
        <button className={className} onClick={onClick}>{title}</button>
    )
}