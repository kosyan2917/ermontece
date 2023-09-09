import "./montece-frame.css"


const MonteceFrame = ({teammate}) => {
    return <div className={"team-montece"}>
        <img src={teammate} className={"image-montece"}/>
        <h1 className={"header-montece"}> Юрий Поздняков</h1>
        <h4 className={"status-montece"}> Программист, team-lead</h4>
        <p> Организовываю работу команды и пишу строки кода для наших игр. Люблю проходить игры с детства, и тем более, их разрабатывать. Считаю, что компьютерные игры - лучшая совокупность творческих идей, реализованных в виде визуальных, звуковых, геймплейных и других направлениях. Стараемся делать лучшие продукты для комфортной игры и ощущения погружения в них.</p>
    </div>
}

export default MonteceFrame