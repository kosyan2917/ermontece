import GamesHeader from "./games-header/games-header";
import Game from "./game/game";
import "./games.css"
import zdk from '../images/new_bg_1.png'


const Games = () => {
    return <div className={"games"}>
        <GamesHeader/>
        <Game name={"ETERNAL RIFTS"}
              description={"Легендарная первая игра нашей компании. Увлекательный платформер с элементами хардкора в постапокалиптическом мире, заполоненном двумерными зомби!"}
              image={"1.jpg"}
              link={"https://vk.com/eternalrifts"}
        />
        <Game name={"ZOMBIE DASH KILL"}
              description={"Легендарная первая игра от нашей команды. Увлекательный и сложный платформер-бродилка в постапокалиптическом мире. Сражайтесь против зомби в городах, лесах, подземных научных лабораториях и победите нулевого пациента!"}
              image={zdk}
              link={"https://montece-gaming.itch.io/zombie-dash-kill"}
        />
    </div>
}

export default Games