import "./assets/scss/Footer.scss";

export const Footer = ({
  todoItems,
  currFilter,
  onChangeFilter,
  onClearCompleted,
}) => {
  const completeTasks = todoItems.filter((el) => el.complete === true);
  const taskRemaining = todoItems.length - completeTasks.length;

  function handleFilterChange(e) {
    onChangeFilter(e.target.value);
  }

  return (
    <section className="list-footer">
      <span>{taskRemaining} items left</span>
      <form>
        <fieldset>
          <input
            type="radio"
            id="all"
            name="all"
            value="all"
            checked={currFilter === "all"}
            onChange={handleFilterChange}
          />
          <label htmlFor="all" className={currFilter === "all" ? "active" : ""}>
            All
          </label>

          <input
            type="radio"
            id="active"
            name="active"
            value="active"
            checked={currFilter === "active"}
            onChange={handleFilterChange}
          />
          <label
            htmlFor="active"
            className={currFilter === "active" ? "active" : ""}
          >
            Active
          </label>

          <input
            type="radio"
            id="completed"
            name="completed"
            value="completed"
            checked={currFilter === "completed"}
            onChange={handleFilterChange}
          />
          <label
            htmlFor="completed"
            className={currFilter === "completed" ? "active" : ""}
          >
            Completed
          </label>
        </fieldset>
      </form>
      <button onClick={onClearCompleted}>Clear Completed</button>
    </section>
  );
};
