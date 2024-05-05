import { useState } from "react";
function TodoForm({onAdd}) {

    const [text, setText] = useState("");

    return (
        <form className="flex items-center"  onSubmit={(e)=> {
            e.preventDefault();
            onAdd(text);
            setText("");
        }}>
            <input
            type="text" value={text} onChange={(e) => {
                setText(e.target.value);
            }} />
            <button
            type="submit"
            >Add</button>
        </form>
    )
}
export default TodoForm;