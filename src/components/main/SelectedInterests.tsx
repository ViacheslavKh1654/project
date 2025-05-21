import React, { ChangeEvent, useState } from "react";
import { InterestKey } from "./Main";
import { InterestsProps } from "./Main";
import { Button } from "../button/Button";
import s from "../button/button.module.css"
import st from "./main.module.css"


type SelectedInterestsProps = {
    title: InterestKey
    tasks: InterestsProps[]
    closeModal: () => void
    changeCheckbox: (title: InterestKey, id: number) => void
}

export const SelectedInterests = ({ title, tasks, changeCheckbox, closeModal }
    : SelectedInterestsProps) => {



    return (
        <div>
            <div className={st.title_modal_window}>
                <h3>{title}</h3>
                <h6>Select subinterests</h6>
            </div>
            <ul>
                {tasks.map((t) => (
                    <li key={`${title}-${t.id}`}>
                        <div
                            className={st.li_box}
                            onClick={() => changeCheckbox(title, t.id)}
                            style={{ cursor: "pointer" }}
                        >
                            <p>{t.subinterests}</p>
                            <input
                                type="checkbox"
                                checked={t.selected}
                                onChange={() => { }} // Ничего не делаем — кликаем по контейнеру
                                onClick={(e) => e.stopPropagation()} // Чтобы не срабатывало дважды
                            />
                        </div>
                    </li>
                ))}
            </ul>
            <div className={s.other_interests_box}>
                <Button title="Ok, select other interests" onClick={() => closeModal()} className={s.other_interests} />
            </div>

        </div>
    )
}