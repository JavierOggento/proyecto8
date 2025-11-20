import { useKanban } from "../context/useKanban";
import "../Styles/TaskCard.css"

export default function TaskCard({ task, column }) {
    const { moveTask } = useKanban();

    const moveTo = (target) => {
        moveTask(task.id, target);
    };

    return (
        <div className={`task-card ${column}`}>
            <p className="title">{task.title}</p>

            <div className="task-action">
                {column !== "todo" && (
                    <button className="botones" onClick={() => moveTo("todo")}>
                        Move to To do
                    </button>
                )}

                {column !== "doing" && (
                    <button className="botones" onClick={() => moveTo("doing")}>
                        Move to In-Progress
                    </button>
                )}

                {column !== "done" && (
                    <button className="botones" onClick={() => moveTo("done")}>
                        Move to Done
                    </button>
                )}
            </div>
        </div>
    );
}
