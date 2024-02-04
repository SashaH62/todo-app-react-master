import { useMemo, useState } from "react";
import { CreateTask } from "./CreateTask";
import { Footer } from "./Footer";
import { ListContainer } from "./ListContainer";
import DarkIcon from "./assets/images/icon-sun.svg";
import LightIcon from "./assets/images/icon-moon.svg";
import "./assets/scss/App.scss";

const initTodos = [
  {
    task: "Complete online JavaScript course",
    complete: true,
    id: 1,
  },
  {
    task: "Jog around the park 3x",
    complete: false,
    id: 2,
  },
  {
    task: "10 minutes meditation",
    complete: true,
    id: 3,
  },
  {
    task: "Read for 1 hour",
    complete: false,
    id: 4,
  },
  {
    task: "Pick up groceries",
    complete: false,
    id: 5,
  },
  {
    task: "Complete Todo App on Frontend Mentor",
    complete: false,
    id: 6,
  },
];

function App() {
  const [listItems, setListItems] = useState(initTodos);
  const [currFilter, setCurrFilter] = useState("all");
  const [isDark, setIsDark] = useState(true);

  const filteredList = useMemo(() => {
    if (currFilter === "all") return listItems;
    if (currFilter === "active")
      return listItems.filter((item) => !item.complete);
    if (currFilter === "completed")
      return listItems.filter((item) => item.complete);
  }, [listItems, currFilter]);

  function handleToggleCompleted(taskId) {
    setListItems((items) =>
      items.map((item) =>
        item.id === taskId ? { ...item, complete: !item.complete } : item
      )
    );
  }

  function handleAddItem(e, newItem) {
    if (!newItem) return;

    setListItems([
      ...listItems,
      { task: newItem, completed: false, id: Math.floor(Math.random() * 100) },
    ]);
  }

  function handleClearCompleted() {
    setListItems((items) => items.filter((item) => !item.complete));
  }

  function handleDeleteItem(taskToDelete) {
    setListItems((items) =>
      items.filter((item) => item.id !== taskToDelete.id)
    );
  }

  function handleDarkModeToggle() {
    setIsDark((prev) => !prev);
  }

  return (
    <div className="App">
      <section className="header">
        <h1>TODO</h1>
        <img
          src={isDark ? DarkIcon : LightIcon}
          alt={isDark ? "Dark Mode Icon" : "Light Mode Icon"}
          onClick={handleDarkModeToggle}
        />
      </section>
      <CreateTask onAddItem={handleAddItem} />
      <ListContainer
        todoItems={filteredList}
        setTodoItems={setListItems}
        onToggleCompleted={handleToggleCompleted}
        onDeleteItem={handleDeleteItem}
      />
      <Footer
        todoItems={listItems}
        currFilter={currFilter}
        onChangeFilter={setCurrFilter}
        onClearCompleted={handleClearCompleted}
      />
    </div>
  );
}

export default App;
