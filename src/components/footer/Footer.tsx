import React from "react"
import s from "./footerStyle.css"
import iconInst from "..//..//assets/instagram.svg"
import iconTelegram from "..//..//assets/iconTelegram.svg"
import iconFaceBook from "..//..//assets/iconFacebook.svg"



export const Footer = () => {
    return (
        <footer>
            <div className={s.footerText}><p>All materials on this site are protected by copyright. Unauthorized use is prohibited. Violations may result in
                legal action.</p>
            </div>
            <div className={s.footerIcon}>
                <a href="https://www.instagram.com/naturalnatureeeee/" target="blank">
                    <img src={iconInst} alt="instagram" />
                </a>
                <a href="https://t.me/BRO_8888_BRO_8888_BRO_8888" target="blank">
                    <img src={iconTelegram} alt="telegram" />
                </a>
                <a href="https://www.facebook.com/photo/?fbid=2785553311697485&set=a.1525479507704878#" target="blank">
                    <img src={iconFaceBook} alt="facebook" />
                </a>
            </div>
        </footer>
    )
}