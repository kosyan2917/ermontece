import "./header-main.css"
import CardToggler from "../card-toggler/cardtoggler";
const HeaderMain = () => {
    return <div className={"main-div"} id={'main'}>
        <div>
            <h1 className={"montece"}>MONTECE</h1>
        </div>
        <div className={"gaming"}>
            <h2 className={"gaming-text"}>GAMING</h2>
            <p>Идейно-технологическая организация по разработке компьютерных игр</p>
        </div>
        <div className={"toggler"}>
            <CardToggler/>
        </div>
    </div>
}

export default HeaderMain