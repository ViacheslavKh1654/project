import React, { useState, useEffect } from "react";
import { Button } from "../button/Button";
import s from "../button/button.module.css"
import st from "./main.module.css"
import { SelectedInterests } from "./SelectedInterests";
import { v1 } from "uuid";
import { title } from "process";

export type InterestsProps = {
    subinterests: string
    selected: boolean
    id: number
}

export type InterestKey =
    | "Technology"
    | "Code"
    | "Business"
    | "Health"
    | "Travel"
    | "Self-Dev"
    | "Desing"
    | "Movies"
    | "Music"
    | "Food"
    | "Sports"
    | "Blockchain"
    | "Philosophi"
    | "Military";

export const Main = () => {

    const [userInterests, setUserInterests] = useState({
        "Technology": [
            { id: 1, subinterests: "Tech Startups", selected: false },
            { id: 2, subinterests: "Quantim Cumputing", selected: true },
            { id: 3, subinterests: "Innovations", selected: false },
            { id: 4, subinterests: "Robotics", selected: false },
            { id: 5, subinterests: "FinTeach", selected: false },
            { id: 6, subinterests: "EdTech", selected: false },
            { id: 7, subinterests: "MedTech", selected: false },
            { id: 8, subinterests: "MilTech", selected: false },
        ],
        "Code": [
            { id: 1, subinterests: "111", selected: false },
            { id: 2, subinterests: "222", selected: false },
            { id: 3, subinterests: "333", selected: false },
            { id: 4, subinterests: "444", selected: false },
            { id: 5, subinterests: "555", selected: false },
            { id: 6, subinterests: "666", selected: false },
            { id: 7, subinterests: "777", selected: false },
            { id: 8, subinterests: "888", selected: false },
        ],
        "Business": [
            { id: 1, subinterests: "111", selected: false },
            { id: 2, subinterests: "222", selected: false },
            { id: 3, subinterests: "333", selected: false },
            { id: 4, subinterests: "444", selected: false },
            { id: 5, subinterests: "555", selected: false },
            { id: 6, subinterests: "666", selected: false },
            { id: 7, subinterests: "777", selected: false },
            { id: 8, subinterests: "888", selected: false },
        ],
        "Health": [
            { id: 1, subinterests: "111", selected: false },
            { id: 2, subinterests: "222", selected: false },
            { id: 3, subinterests: "333", selected: false },
            { id: 4, subinterests: "444", selected: false },
            { id: 5, subinterests: "555", selected: false },
            { id: 6, subinterests: "666", selected: false },
            { id: 7, subinterests: "777", selected: false },
            { id: 8, subinterests: "888", selected: false },
        ],
        "Travel": [
            { id: 1, subinterests: "111", selected: false },
            { id: 2, subinterests: "222", selected: false },
            { id: 3, subinterests: "333", selected: false },
            { id: 4, subinterests: "444", selected: false },
            { id: 5, subinterests: "555", selected: false },
            { id: 6, subinterests: "666", selected: false },
            { id: 7, subinterests: "777", selected: false },
            { id: 8, subinterests: "888", selected: false },
        ],
        "Self-Dev": [
            { id: 1, subinterests: "111", selected: false },
            { id: 2, subinterests: "222", selected: false },
            { id: 3, subinterests: "333", selected: false },
            { id: 4, subinterests: "444", selected: false },
            { id: 5, subinterests: "555", selected: false },
            { id: 6, subinterests: "666", selected: false },
            { id: 7, subinterests: "777", selected: false },
            { id: 8, subinterests: "888", selected: false },
        ],
        "Desing": [
            { id: 1, subinterests: "111", selected: false },
            { id: 2,subinterests: "222", selected: false },
            { id: 3,subinterests: "333", selected: false },
            { id: 4,subinterests: "444", selected: false },
            { id: 5,subinterests: "555", selected: false },
            { id: 6,subinterests: "666", selected: false },
            { id: 7,subinterests: "777", selected: false },
            { id: 8,subinterests: "888", selected: false },
        ],
        "Movies": [
            { id: 1, subinterests: "111", selected: false },
            { id: 2, subinterests: "222", selected: false },
            { id: 3, subinterests: "333", selected: false },
            { id: 4, subinterests: "444", selected: false },
            { id: 5, subinterests: "555", selected: false },
            { id: 6, subinterests: "666", selected: false },
            { id: 7, subinterests: "777", selected: false },
            { id: 8, subinterests: "888", selected: false },
        ],
        "Music": [
            { id: 1, subinterests: "111", selected: false },
            { id: 2, subinterests: "222", selected: false },
            { id: 3, subinterests: "333", selected: false },
            { id: 4, subinterests: "444", selected: false },
            { id: 5, subinterests: "555", selected: false },
            { id: 6, subinterests: "666", selected: false },
            { id: 7, subinterests: "777", selected: false },
            { id: 8, subinterests: "888", selected: false },
        ],
        "Food": [
            { id: 1, subinterests: "111", selected: false },
            { id: 2, subinterests: "222", selected: false },
            { id: 3, subinterests: "333", selected: false },
            { id: 4, subinterests: "444", selected: false },
            { id: 5, subinterests: "555", selected: false },
            { id: 6, subinterests: "666", selected: false },
            { id: 7, subinterests: "777", selected: false },
            { id: 8, subinterests: "888", selected: false },
        ],
        "Sports": [
            { id: 1, subinterests: "111", selected: false },
            { id: 2, subinterests: "222", selected: false },
            { id: 3, subinterests: "333", selected: false },
            { id: 4, subinterests: "444", selected: false },
            { id: 5, subinterests: "555", selected: false },
            { id: 6, subinterests: "666", selected: false },
            { id: 7, subinterests: "777", selected: false },
            { id: 8, subinterests: "888", selected: false },
        ],
        "Blockchain": [
            { id: 1, subinterests: "111", selected: false },
            { id: 2, subinterests: "222", selected: false },
            { id: 3, subinterests: "333", selected: false },
            { id: 4, subinterests: "444", selected: false },
            { id: 5, subinterests: "555", selected: false },
            { id: 6, subinterests: "666", selected: false },
            { id: 7, subinterests: "777", selected: false },
            { id: 8, subinterests: "888", selected: false },
        ],
        "Philosophi": [
            { id: 1, subinterests: "111", selected: false },
            { id: 2, subinterests: "222", selected: false },
            { id: 3, subinterests: "333", selected: false },
            { id: 4, subinterests: "444", selected: false },
            { id: 5, subinterests: "555", selected: false },
            { id: 6, subinterests: "666", selected: false },
            { id: 7, subinterests: "777", selected: false },
            { id: 8, subinterests: "888", selected: false },
        ],
        "Military": [
            { id: 1, subinterests: "111", selected: false },
            { id: 2, subinterests: "222", selected: false },
            { id: 3, subinterests: "333", selected: false },
            { id: 4, subinterests: "444", selected: false },
            { id: 5, subinterests: "555", selected: false },
            { id: 6, subinterests: "666", selected: false },
            { id: 7, subinterests: "777", selected: false },
            { id: 8, subinterests: "888", selected: false },
        ],
    })

    const [isVisible, setIsVisible] = useState(false);

    const [selectedWindow, setSelectedWindow] = useState<InterestKey | null>(null)

    const selectHobby = (interests: InterestKey) => {
        setSelectedWindow(interests);
        setIsVisible(true);
    };

    const [isClosing, setIsClosing] = useState(false)
    const closeModal = () => {
        setIsClosing(true);
        setIsVisible(false);

        setTimeout(() => {
            setSelectedWindow(null);
            setIsClosing(false);
        }, 300);
    }

  const changeCheckbox = (title: InterestKey, id: number) => {
    setUserInterests((prevState) => {
        const newState = {
            ...prevState,
            [title]: prevState[title].map((t) =>
                t.id === id ? { ...t, selected: !t.selected } : t
            ),
        };
        localStorage.setItem("userInterests", JSON.stringify(newState)); 
        return newState;
    });
};
  
        useEffect(() => {
    const handleClickOutsideApp = (event: MouseEvent) => {
        const appElement = document.querySelector('.App');
        if (appElement && !appElement.contains(event.target as Node)) {
            closeModal(); // Закрыть модалку, если клик вне всей App
        }
    };

    document.addEventListener('mousedown', handleClickOutsideApp);
    return () => {
        document.removeEventListener('mousedown', handleClickOutsideApp);
    };
}, []);

        useEffect(() => {
    const saved = localStorage.getItem("userInterests");
    if (saved) {
        setUserInterests(JSON.parse(saved));
    }
}, []);

    return (
        <main >
            <div className={st.title}>
                <p >Select your interests</p>
            </div>
            <div className={s.button_grid}>
                {Object.entries(userInterests).map(([category, subitems]) => {
    const selectedCount = subitems.filter(item => item.selected).length; // [ADDED]
    return (
        <div key={category}>
            <Button 
                title={category}
                onClick={() => selectHobby(category as InterestKey)}
                numberOfInterests={selectedCount} // [CHANGED]
            />
        </div>
    );
})}
                
            </div>
            <Button title="Next" onClick={() => {  }} className={s.next_btn} />
            {(selectedWindow || isClosing) && (
                <div
                    className={`${st.modal_overlay} ${isClosing ? st.fadeOut : isVisible ? st.fadeIn : ''
                        }`}
                    onClick={closeModal}
                >
                    <div
                        className={`${st.modal_content} ${isClosing ? st.slideDown : st.slideUp
                            }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {selectedWindow && (
                            <SelectedInterests
                                title={selectedWindow}
                                tasks={userInterests[selectedWindow]}
                                closeModal={closeModal}
                                changeCheckbox={changeCheckbox}
                            
                            />
                        )}

                    </div>
                </div>
            )}
        </main>
    )
}