import "./game.css"

const Game = (game_options) => {

    return <div className={"game"}>
        <div className={"game-grid"} style={{
            backgroundImage: ["linear-gradient(150deg, rgba(17, 214, 66, 100) 30%, rgba(17, 214, 66, .30) 70%)",
            "url(" + game_options.image + ")"]}}>
            <div className={"game-header"}>
                <h3> {game_options.name} </h3>
            </div>
            <div className={'game-description'}>
                <p> {game_options.description} </p>
            </div>
            <div className={"game-button"}>
                <button>
                    <span> Подробнее </span>
                </button>
            </div>
        </div>
    </div>
}

export default Game