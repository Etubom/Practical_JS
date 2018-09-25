/**
 * 
 todoList.addTodo should add objects
 todoList.changeTodo should change the todoText property
 todoList.toggleCompleted should change the completed property
 */
let todoList = {
  todos: [],
  displayTodos: function() {
    console.log("My Todos: ", this.todos);
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(indexValueToChange, newValue) {
    this.todos[indexValueToChange] = newValue;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};
