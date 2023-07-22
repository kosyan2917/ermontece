import "./teammate-freame.css"

const TeammateFrame = (teammate) => {
    return <div className={"teammate-frame"} style={{gridArea: teammate.area}}>
        <h1 className={"teammate-header"}>{teammate.name} {teammate.surname}</h1>
        <h4 className={"teammate-status"}>{teammate.role}</h4>
        <div >
            <img className={"teammate-photo"} src={teammate.photo}/>
        </div>

    </div>
}



export default TeammateFrame