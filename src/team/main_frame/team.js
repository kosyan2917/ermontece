import "./team.css"
import MonteceFrame from "../montece-frame/montece-frame";
import TeammateFrame from "../teammate_frame/teammate-frame";

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
            <MonteceFrame teammate={"teammate.jpg"}/>
            <div className={"team-grid-row1"}>
                <div className={"vl1"}></div>
                <TeammateFrame name={"Гений"} surname={"Жизни"} role={"Отец русской демократии"} photo={"teammate.jpg"}
                               area={"g"}/>
                <div className={"hl1"}></div>
                <TeammateFrame name={"Барак"} surname={"Обама"} role={"Ну типа"} photo={"teammate.jpg"} area={"e"}/>
                <div className={"hl2"}></div>
                <TeammateFrame name={"Барак"} surname={"Обама"} role={"Ну типа"} photo={"teammate.jpg"} area={"c"}/>
                <div className={"vl2"}></div>
            </div>
            <div className={"team-grid-row2"}>
                <TeammateFrame name={"Барак"} surname={"Обама"} role={"Ну типа"} photo={"teammate.jpg"} area={"j"}/>
                <div className={"hl3"}></div>
                <TeammateFrame name={"Барак"} surname={"Обама"} role={"Ну типа"} photo={"teammate.jpg"} area={"k"}/>
                <div className={"hl4"}></div>
                <TeammateFrame name={"Барак"} surname={"Обама"} role={"Ну типа"} photo={"teammate.jpg"} area={"p"}/>
                <div className={"hl5"}></div>
                <TeammateFrame name={"Барак"} surname={"Обама"} role={"Ну типа"} photo={"teammate.jpg"} area={"i"}/>
            </div>

        </div>
    </div>

}

export default Team