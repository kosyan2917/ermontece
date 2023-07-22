import GamesHeader from "./games-header/games-header";
import Game from "./game/game";
import "./games.css"


const Games = () => {
    return <div className={"games"}>
        <GamesHeader/>
        <Game name={"ZOMBIE DASH KILL"}
              description={"Легендарная первая игра нашей компании. Увлекательный платформер с элементами хардкора в постапокалиптическом мире, заполоненном двумерными зомби!"}
              image={"1.jpg"}/>
        <Game name={"ZOMBIE DASH KILL"}
              description={"Легендарная первая игра нашей компании. Увлекательный платформер с элементами хардкора в постапокалиптическом мире, заполоненном двумерными зомби!"}
              image={"1.jpg"}/>
        <Game name={"ZOMBIE DASH KILL"}
              description={"Легендарная первая игра нашей компании. Увлекательный платформер с элементами хардкора в постапокалиптическом мире, заполоненном двумерными зомби!"}
              image={"1.jpg"}/>
    </div>
}

export default Games