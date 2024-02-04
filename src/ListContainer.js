import "./assets/scss/ListContainer.scss";
import { ListItem } from "./ListItem";

export const ListContainer = ({
  todoItems,
  setTodoitems,
  onToggleCompleted,
  onDeleteItem
}) => {
  return (
    <section className="list-body">
      <ul className="todo-list">
        {todoItems.map((el, index) => (
          <ListItem
            item={el}
            onSetCompleted={setTodoitems}
            allItems={todoItems}
            onToggleCompleted={onToggleCompleted}
            onDeleteItem={onDeleteItem}
            key={el.id}
          />
        ))}
      </ul>
    </section>
  );
};
