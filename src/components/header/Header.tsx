import React from "react"
import s from "./header.module.css"
import { title } from "process"
import { ItemFormInput } from "./ItemFormInput"
import logo from "..//../assets/AdrenalineVibek.png"


type PropsType = {
    addTodoLists: (newInput: string) => void
}

export const Header = ({addTodoLists}: PropsType) => {
    return(
        <header className={s.header}>
            <div><img className={s.logo}src={logo}></img></div>
            <ItemFormInput addTodoLists={addTodoLists}/>
        </header>
       
    )
}