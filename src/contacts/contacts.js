import "./contacts.css"
import Contact from "./contact/contact";


const Contacts = () => {
    return <div className={"contacts"}>
        <div className={"contacts-header"}>
            <h1> КОНТАКТЫ </h1>
            <div className={"news-dots-right"}>
                <div className={"news-line"}>
                </div>
                <div></div>
                <div className={"news-dot"}></div>
                <div></div>
                <div className={"news-dot"}></div>
                <div></div>
                <div className={"news-dot"}></div>
                <div></div>
            </div>
        </div>
        <div className={"contacts-grid"}>
            <Contact name={"Info"} email={"info@montecegaming.com"}/>
            <Contact name={"Business"} email={"business@montecegaming.com"}/>
            <Contact name={"Investors"} email={"investors@montecegaming.com"}/>
            <Contact name={"Support"} email={"support@montecegaming.com"}/>
            <Contact name={"Hr"} email={"hr@montecegaming.com"}/>
            <img className={"contacts-image"} src={"Vector.png"}/>
        </div>
    </div>
}

export default Contacts
