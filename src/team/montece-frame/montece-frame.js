import "./montece-frame.css"

const MonteceFrame = ({teammate}) => {
    return <div className={"team-montece"}>
        <img src={teammate} className={"image-montece"}/>
        <h1 className={"header-montece"}> Юрий Поздняков</h1>
        <h4 className={"status-montece"}> Программист, team-lead</h4>
        <p> Организовываю работу команды, пишу строки кода. С детства увлекся разработкой компьютерных игр, и теперь стараюсь отточить свой навык до максимума. Также, обучаюсь искусству генерации идей и сюжетов своей голове. При необходимости, трачу все свое свободное время на работу и беру непростые задачи, к решению которых нужен нестандартный подход.</p>
    </div>
}

export default MonteceFrame