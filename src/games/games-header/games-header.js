import "./games-header.css"

const GamesHeader = () => {
    return <div className={"games-header"} id={'games'}>
        <h1> ИГРЫ </h1>
        <div className={"games-dots"}>
            <div></div>
            <div className={"games-dot"}>
            </div>
            <div></div>
            <div className={"games-dot"}></div>
            <div></div>
            <div className={"games-dot"}></div>
            <div></div>
            <div className={"games-grid-line"}>
            </div>
        </div>
    </div>
}

export default GamesHeader