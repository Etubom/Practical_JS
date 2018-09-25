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
      IsCompleted: false
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
  },
  toggleCompleted: function(position) {
    // change Iscompleted boolean value
    const todo = this.todos[position];
    todo.IsCompleted = !todo.IsCompleted;
    this.displayTodos();
  }
};
