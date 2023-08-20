import React from "react";
import './header.css'
import montece from "./../images/MonteceLogo.png"
const Header = () => {

    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand " href="/">
                <img src={montece} className={"d-inline-block logo"}/>
            </a>
            <ul className="navbar-nav sm-icons">
                <li><a className="nav-link" href="#"><i className="bi bi-facebook"></i></a></li>
                <li><a className="nav-link" href="#"><i className="bi bi-instagram"></i></a></li>
                <li><a className="nav-link" href="#"><i className="bi bi-twitter"></i></a></li>
                <li><a className="nav-link" href="#"><i className="bi bi-pinterest"></i></a></li>
            </ul>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02"
                    aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#main">Главная</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#team">Команда</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#news">Новости</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#games">Игры</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contacts">Контакты</a>
                    </li>
                </ul>
            </div>

        </div>
    </nav>
}

export default Header