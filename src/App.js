import { useState } from 'react';
import TodoList from './ToDoList';
import TodoForm from './TodoForm';
import TodoFooter from './TodoFooter';

function App() {

  const [todos, setTodos] = useState([
    {
      id:Math.random(),
      text:"Learn React",
      isComplited:false
    },
    {
      id:Math.random(),
      text:"Learn Next",
      isComplited:false
    },
    {
      id:Math.random(),
      text:"Learn C++",
      isComplited:false
    },
  ]);

  return (
    <div className="App">
      <TodoForm onAdd={(text) => {
          setTodos([
            ...todos,
            {
              id:Math.random(),
              text:text ,
              isComplited:false
            }
          ]);
      }}/>
      <TodoList
         todos={todos}
         onDelete={(todo) => {
            setTodos(todos.filter((t) =>t.id !== todo.id));
         }}
         onChange={(newTodo) => {
          setTodos(todos.map((todo) => {
            if(todo.id === newTodo.id) {
              return newTodo;
            }
            return todo;
          }));
         }}
        />
      <TodoFooter todos={todos} onClearCompleted={()=> {
        setTodos(todos.filter((todo) => !todo.isComplited));
      }}/>
    </div>
  );
}

export default App;
