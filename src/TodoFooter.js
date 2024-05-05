function TodoFooter({todos, onClearCompleted}) {

    const completedSize = todos.filter((todo) => todo.isComplited).length;

    return (
        <div>
            <span>{completedSize}/{todos.length} Completed</span>
            <button onClick={onClearCompleted}>Clear Completed</button>
        </div>
    )
}
export default TodoFooter;