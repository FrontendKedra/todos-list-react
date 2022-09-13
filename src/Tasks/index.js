import "./style.css";

const Tasks = ({tasks, hideDone, removeTask}) => (
    <ul className="list">
        {tasks.map(task => (
            <li 
            key={task.id}
              className={`list__item${
                task.done && hideDone
                  ? " list__item--hidden" : ""}`}
            >
            <button className="list__button">
            {task.done ? "✔️" : ""}
            </button>
            <span className={
                `${task.done ? "list__item--done" : ""}`
                }>
            {task.content}
            </span>
            <button
            onClick={() => removeTask(task.id)} 
            className="list__button list__button--remove"
            >
            🗑
            </button>
            </li>
        ))}
    </ul>
);

export default Tasks;