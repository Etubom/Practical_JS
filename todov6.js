/**
 * 
  Requirements
  .toggleAll: if everything's true,make everything false
  .toggleAll: otherwise,make everything true
 * 
 */
let todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log("There are not todos in your list.");
    } else {
      this.todos.forEach(function(todo) {
        if (todo.IsCompleted === true) {
          console.log("(X)", todo.todoText); //display (X) on completed todos
        } else {
          console.log("()", todo.todoText); // displays () on incompleted todos
        }
      });
    }
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      IsCompleted: false
    });
    this.displayTodos();
  },
  changeTodo: function(ObjIndex, todoText) {
    this.todos[ObjIndex].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    const todo = this.todos[position];
    todo.IsCompleted = !todo.IsCompleted;
    this.displayTodos();
  }
};
