import "./style.css"

const Buttons = ({tasks, hideDoneTasks}) => {
    if (tasks.lenght === "") {
        return null;
    }

    return (
        <div className="containerButtons">
            <button className="containerButtons__button">
              {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
            </button>

            <button 
            className="containerButtons__button"
            disabled={tasks.every(({ done }) => done)}
            >
            Ukończ wszystkie
            </button>
        </div>
    )
};

export default Buttons;