import React from "react"
import s from "./header.module.css"
import { ButtonUniversal } from "../ButtonUniversal"
import { title } from "process"
import { useState } from "react"

type TypePropsforItemInput = {
    addTodoLists: (newInput: string) => void
}

export const ItemFormInput = ({ addTodoLists }: TypePropsforItemInput) => {

    const [newInput, setNewInput] = useState("")

    return (
        <div className={s.itemForm}>
            
            <input value={newInput}
                onChange={(e) => { setNewInput(e.currentTarget.value) }}
                className={s.inputStyled}
                placeholder="Suggest your own option" />
                <ButtonUniversal className={s.btnAddTodolist}
                onClick={() => {
                    addTodoLists(newInput)
                    setNewInput("")
                }}
                title={"SEND"}
            />
        </div>
    )
}