/* eslint-disable react/no-unknown-property */
function TodoItem1() {
  let todoName = "Buy milk";
  let todoTime = "04/10/2024";

  return (
    <div className="container">
      <div class="row kg-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoTime}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem1;
