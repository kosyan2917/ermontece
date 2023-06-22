import React from "react";
import './header.css'
import montece from "./../images/MonteceLogo.png"
const Header = () => {
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand " href="#">
                <img src={montece} className={"d-inline-block logo"}/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02"
                    aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Главная</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Команда</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Новости</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Игры</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Контакты</a>
                    </li>
                </ul>
            </div>
            <div>
                <ul className={"navbar-nav justify-content-end"}>
                    <li className={"nav-item"}>
                        <a href={'/'}>
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11.5" cy="11.5" r="11.5" fill="#39E639"/>
                                <path d="M17.6371 8.68757C17.5169 8.01278 16.9444 7.52137 16.2799 7.36796C15.2855 7.15342 13.4452 7 11.4541 7C9.46411 7 7.59435 7.15342 6.59879 7.36796C5.93547 7.52137 5.3617 7.98162 5.24153 8.68757C5.12017 9.45464 5 10.5286 5 11.9093C5 13.29 5.12017 14.3639 5.27098 15.131C5.39233 15.8058 5.96493 16.2972 6.62824 16.4506C7.68389 16.6652 9.49357 16.8186 11.4847 16.8186C13.4758 16.8186 15.2855 16.6652 16.3411 16.4506C17.0044 16.2972 17.577 15.837 17.6984 15.131C17.8186 14.3639 17.9694 13.2589 18 11.9093C17.9387 10.5286 17.7879 9.45464 17.6371 8.68757ZM9.82581 14.0571V9.76147L13.5053 11.9093L9.82581 14.0571Z" fill="#201F20"/>
                            </svg>
                        </a>
                    </li>
                    <li className={"nav-item"}>
                        <a href={'/'}>
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11.5" cy="11.5" r="11.5" fill="#39E639"/>
                                <rect x="4" y="5" width="14" height="14" fill="url(#pattern0)"/>
                                <defs>
                                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlinkHref="#image0_376_163" transform="scale(0.01)"/>
                                    </pattern>
                                    <image id="image0_376_163" width="100" height="100" xlinkHref="data:image/png;base64,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"/>
                                </defs>
                            </svg>

                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}

export default Header