import React from "react";
import iconChat from "../../assets/icon-chat.webp"
import iconMoney from "../../assets/icon-money.webp"
import iconSecurity from "../../assets/icon-security.webp"
import texts from "../../data/dataText.json";
import Banner from "../../components/Banner/Banner";

function Home() {
    const imageFeature = {
        "icon-chat.webp": iconChat,
        "icon-money.webp": iconMoney,
        "icon-security.webp": iconSecurity,
    }

    return (
        <main>
            <Banner
            titleOne={texts.titleOne}
            titleTwo={texts.titleTwo}
            text={texts.text}
            alt={texts.alt}
            />
        </main>
    )
}

export default Home;