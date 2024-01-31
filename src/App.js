import { useState } from "react";
import { CreateTask } from "./CreateTask";
import { Footer } from "./Footer";
import { ListContainer } from "./ListContainer";
import DarkIcon from "./assets/images/icon-sun.svg";
import "./assets/scss/App.scss";

const initTodos = [
  {
    task: "Complete online JavaScript course",
    complete: true,
  },
  {
    task: "Jog around the park 3x",
    complete: false,
  },
  {
    task: "10 minutes meditation",
    complete: true,
  },
  {
    task: "Read for 1 hour",
    complete: false,
  },
  {
    task: "Pick up groceries",
    complete: false,
  },
  {
    task: "Complete Todo App on Frontend Mentor",
    complete: false,
  },
];

function App() {
  const [listItems, setListItems] = useState(initTodos);

  function handleToggleCompleted(taskTitle) {
    setListItems((items) =>
      items.map((item) =>
        item.task === taskTitle ? { ...item, complete: !item.complete } : item
      )
    );
  }

  function handleClearCompleted() {
    setListItems((items) => items.filter((item) => !item.complete))
  }

  return (
    <div className="App">
      <section className="header">
        <h1>TODO</h1>
        <img src={DarkIcon} alt="Dark Mode Icon" />
      </section>
      <CreateTask />
      <ListContainer
        todoItems={listItems}
        setTodoItems={setListItems}
        onToggleCompleted={handleToggleCompleted}
      />
      <Footer todoItems={listItems} onClearCompleted={handleClearCompleted}/>
    </div>
  );
}

export default App;
