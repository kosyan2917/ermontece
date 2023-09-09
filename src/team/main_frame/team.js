import "./team.css"
import MonteceFrame from "../montece-frame/montece-frame";
import TeammateFrame from "../teammate_frame/teammate-frame";
import montece from "../../images/pngwing.com.png"


const Team = () => {
    return <div className={"team"} id={'team'}>
        <div className={"team-header-grid"}>
        <h1> НАША ДРУЖНАЯ КОМАНДА </h1>
        <div className={"team-dots"}>
            <div></div>
            <div className={"team-dot"}>
            </div>
            <div></div>
            <div className={"team-dot"}></div>
            <div></div>
            <div className={"team-dot"}></div>
            <div></div>
            <div className={"team-grid-line"}>
                <div></div>
                <div className={"team-line"}></div>
                <div></div>
            </div>
            <div className={"team-vertical-line"}></div>
        </div>
        </div>
        <div className={"team-grid"}>
            <MonteceFrame teammate={montece}/>
            <div className={"team-grid-row1"}>
                <div className={"vl1"}></div>
                <TeammateFrame name={"Евгений"} surname={""} role={"Игровой сценарист"} photo={montece}
                               area={"g"}/>
                <div className={"hl1"}></div>
                <TeammateFrame name={"Елисей"} surname={""} role={"2D-художник"} photo={montece} area={"e"}/>
                <div className={"hl2"}></div>
                <TeammateFrame name={"Иван"} surname={""} role={"2D-художник"} photo={montece} area={"c"}/>
                <div className={"vl2"}></div>
            </div>
            <div className={"team-grid-row2"}>
                <TeammateFrame name={"Егор"} surname={""} role={"Геймдизайнер"} photo={montece} area={"j"}/>
                <div className={"hl3"}></div>
                <TeammateFrame name={"Валерий"} surname={""} role={"Геймдизайнер, программист"} photo={montece} area={"k"}/>
                <div className={"hl4"}></div>
                <TeammateFrame name={"Барак"} surname={""} role={"Ну типа"} photo={montece} area={"p"}/>
                <div className={"hl5"}></div>
                <TeammateFrame name={"Барак"} surname={""} role={"Ну типа"} photo={montece} area={"i"}/>
            </div>

        </div>
    </div>

}

export default Team