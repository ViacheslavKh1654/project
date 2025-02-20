import React, { useState } from "react"
import s from "./main.module.css"
import { ButtonUniversal } from "../ButtonUniversal"

type PropsForTodolist = {
  title: string;
  bgrImg: string;
  information: {
    price: string;
    duration: string;
    musthave: string;
  }
}

export const TodoList = ({ title, bgrImg, information }: PropsForTodolist) => {

  const [showDetails, setShowDetails] = useState(false)
  const [bookNow, setbookNow] = useState(false)

  return (
    <div className={s.todoList} style={{ backgroundImage: `url(${bgrImg})` }}>

      <h1 className={bookNow || showDetails? s.h1opacity : ""}>{title}</h1>

      {bookNow && (
        <div className={s.BoxbtnClickBookNow }>
          <div>Last Name<input type="text" /></div>
          <div>Select date<input type="datetime-local" /></div>
        </div>

      )}
      {showDetails && (
        <div className={s.BoxbtnClickDetails}>  
            <ButtonUniversal onClick={() => {}} className={s.closeWindow} title="X"/>
            <p><strong>Price:</strong> {information.price}</p>
            <p><strong>Time:</strong> {information.duration}</p>
            <p><strong>Must have:</strong> {information.musthave}</p>
        </div>

      )}

      <div className={s.selectionButtons}>
        <ButtonUniversal onClick={() => (setbookNow(!bookNow))} className={s.BtnBuy} title="Book now" />
        <ButtonUniversal onClick={() => (setShowDetails(!showDetails))} className={s.btnDetails} title="Service details" />
      </div>


    </div>
  )
}

