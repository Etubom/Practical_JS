/**
 * 
 V2 requirements
 It should have a function to display todos
 It should have a function to add new todos
 It should have a function to change todos
 It should have a function to delete todos 
 * 
 */

let todos = ["item1", "item2", "item3", "items4"];

const displayTodos = () => console.log("This is my todos list " + todos);

displayTodos(); // display todos

const addTodos = todo => {
  todos.push(todo);
  displayTodos();
};
addTodos("item 5 add with push"); // add new todos

const changeTodo = (itemNumberTochange, newValue) => {
  todos[itemNumberTochange] = newValue;
  displayTodos();
};
changeTodo(0, "changedTodo");
