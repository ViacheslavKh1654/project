import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { useState } from 'react';
import { v1 } from 'uuid';
import { Main } from './components/main/Main';
import { Footer } from './components/footer/Footer';
import imgBike from "./assets/Bike.jpg"
import imgCruis from "./assets/cruis.jpg"
import imgFootball from "./assets/FOOTBALL.avif"
import imgMountains from "./assets/MOUNTAINS.jpg"
import imgSparring from "./assets/sparring.jpeg"
import parashutes from "./assets/parachutejump.jpeg"
import aparat from "./assets/APARAT.png"
import { write } from 'fs';


export type TypeValuerFilterProps = "all" | "completed" | "active"

function App() {

  let todoList1 = v1()
  let todoList2 = v1()
  let todoList3 = v1()
  let todoList4 = v1()
  let todoList5 = v1()
  let todoList6 = v1()

  const [todoList, setTodoList] = useState([
    {
      id: todoList1,
      bgrImg: imgFootball,
      title: "PLAYNG FOOTBALL",
      information: {
        price: " per person 50$",
        duration: " two halves of 45 minutes",
        musthave: " sports equipment will be provided"
      }
    },
    {
      id: todoList2,
      bgrImg: imgMountains,
      title: "TRIP TO THE MOUNTAINS",
      information: {
        price: " per person: 300$",
        duration: " the walk lasts 4 hours",
        musthave: " sports equipment will be provided"
      }
    },
    {
      id: todoList3,
      bgrImg: imgSparring,
      title: "MARTIAL ARTS",
      information: {
        price: " per person: 50$",
        duration: " 2 hours",
        musthave: " sports equipment will be provided"
      }
    },
    {
      id: todoList4,
      bgrImg: imgBike,
      title: "BICYCLE RENTAL",
      information: {
        price: " per person: 70$",
        duration: " 3 hours",
        musthave: " sports equipment will be provided"
      }
    },
    {
      id: todoList5,
      bgrImg: imgCruis,
      title: "SEA ​​CRUISE",
      information: {
        price: " per person: 500$",
        duration: " 4 days",
        musthave: " sports equipment will be provided"
      }
    },
    {
      id: todoList6,
      bgrImg: parashutes,
      title: "PARACHUTES",
      information: {
        price: " per person: 20$",
        duration: " 2 houre",
        musthave: " sports equipment will be provided"
      }
    },
  ])

  const addTodoLists = (newInput: string) => {
    let addTodoList = {
      id: v1(),
      bgrImg: aparat,
      title: newInput,
      information: {
        price: "пусто",
        duration: "пусто",
        musthave: "пусто"
      }
    }
    setTodoList([addTodoList, ...todoList])
  }


  const selectService = () => {
    alert("Оплатить")
  }

  return (
    <div className="App">
      <Header addTodoLists={addTodoLists} />
      <Main todoList={todoList} />
      <Footer />
    </div>
  );
}
export default App;

