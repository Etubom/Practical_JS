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
    //add Obj with properties
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(ObjIndex, todoText) {
    this.todos[ObjIndex].todoText = todoText; // change text on Obj
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};
