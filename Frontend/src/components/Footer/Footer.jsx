import React from "react";
import text from "../../data/dataText.json";


function Footer({ text }) {
    return (
        <footer className="footer">
        <p className="footer-text">{text}</p>
        </footer>
    )
}

export default Footer;