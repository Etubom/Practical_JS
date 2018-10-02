/**
 * 
 V5 Requirements
 .displayTodos should show .todotext
 .displayTodos should tell you if .todos is empty
 .displayTodos should show .completed
 * 
*/
let todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      //check if todo list is empty
      console.log("There are not todos in your list.");
    } else {
      console.log("My Todos: ", this.todos);
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
