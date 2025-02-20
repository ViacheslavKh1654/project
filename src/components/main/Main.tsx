import React from "react"
import s from "./main.module.css"
import { TodoList } from "./TodoList"
import { title } from "process"


export type TypeTodolist = {
    id: string
    bgrImg: string
    title: string
    information: InformationProps
}

type InformationProps = {
    price: string
    duration: string
    musthave: string
}

type PropsType = {
    todoList: TypeTodolist[]

}

export const Main = ({ todoList}: PropsType) => {
    return (
        <div className={s.main}>
            {todoList.map(el => {
                return (
                    <TodoList 
                             key={el.id}
                             title={el.title}
                             bgrImg={el.bgrImg}
                             information={el.information}
                    />
                )
            })}
            <div><p className={s.text}>Adrenaline Bibek is your guide to the world of active and diverse recreation. We offer unique
                programs for adrenaline enthusiasts and those who appreciate active travel. From extreme sports to
                thrilling outdoor adventures, we have everything to make your vacation exciting and full of adrenaline.
                Join us and discover new horizons of pleasure and adventure!</p>
            </div>
        </div>


    )
}