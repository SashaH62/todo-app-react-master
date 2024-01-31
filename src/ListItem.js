import "./assets/scss/ListItem.scss";

export const ListItem = ({ item, onToggleCompleted }) => {
  return (
    <li
      className={`list-item ${item.complete ? "completed" : ""}`}
      onClick={() => onToggleCompleted(item.task)}
    >
      <p>{item.task}</p>
    </li>
  );
};
