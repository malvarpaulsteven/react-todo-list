import './App.css';

export const Task = (props) => {
    return (
        <div className="task">
            <h1>{props.taskName}</h1>
            <button onClick={() => props.deleteTask(props.id)}>Delete</button>
        </div>
    );
}