import './news-page.css'
import montece from "../images/MonteceLogo.png";
import React from "react";

const NewsPage = () => {
    return <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand " href="/">
                    <img src={montece} className={"d-inline-block logo"}/>
                </a>
            </div>
        </nav>
    </div>
}


export default NewsPage