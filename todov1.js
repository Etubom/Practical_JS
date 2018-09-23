/**
 *
 V1 requirements
 It should have a place to store todos
 It should have a way to display todos
 It should have a way to add new todos
 It should have a way to change todos
 It should have a way to delete todos  
 * 
 */

let todos = ["item1", "item2", "item3"]; //store todos

console.log("My todos :" + todos); //display todos

todos.push("item4"); //add new todos

console.log("My todos after push " + todos);

todos[1] = "item 2 changed"; //change todos
console.log("My todos changed " + todos);

todos.splice(1, 1); //using splice to delete item
console.log("todos after deletion becomes " + todos); // splice mutates our original array
