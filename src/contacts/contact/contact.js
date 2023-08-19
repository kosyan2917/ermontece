import "./contact.css"

const Contact = ({name, email}) => {
    return <div className={"contact-grid"}>
        <div className={"contact-linedots"}>
            <div className={"contact-line"}></div>
            <div></div>
            <div className={"contact-dot"}></div>
            <div></div>
            <div className={"contact-dot"}></div>
            <div></div>
            <div className={"contact-dot"}></div>
        </div>
        <div className={"contact-vline"}>
        </div>
        <div className={"contact-name "}>
            <p className={"colored"}> {name} </p>
        </div>
        <div className={"contact-email colored"}>
            <h2> {email} </h2>
        </div>
    </div>
}

export default Contact