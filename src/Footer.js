import "./assets/scss/Footer.scss";

export const Footer = ({ todoItems, onClearCompleted }) => {
  const completeTasks = todoItems.filter((el) => el.complete === true);
  const taskRemaining = todoItems.length - completeTasks.length;

  return (
    <section className="list-footer">
      <span>{taskRemaining} items left</span>
      <form>
        <fieldset>
          <input type="radio" id="all" name="all" value="all" />
          <label htmlFor="all">All</label>

          <input type="radio" id="active" name="active" value="active" />
          <label htmlFor="active">Active</label>

          <input
            type="radio"
            id="completed"
            name="completed"
            value="completed"
          />
          <label htmlFor="completed">Completed</label>
        </fieldset>
      </form>
      <button onClick={onClearCompleted}>Clear Completed</button>
    </section>
  );
};
