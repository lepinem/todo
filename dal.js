// dal.js
// this file contains the functions needed to process user inputs

const todo = require('./todo');
const closed = require('./closed');

//displays the todo list (open)
function getTodoList(itemId){
  return todo.filter(function(item){
    return !item.close
  })
}

// adds a new item to the todo list
function addItem(item){
  const newItem = {id:(todo.length + 1) + (closed.length), task: item, close:(false)};
    todo.push(newItem);
    return todo;
}

//removes closed item from the open items list
function closeItem(itemId){
  todo.map(function(item){
    if(item.id == itemId){
      item.close = true;
      closed.push(item);
      todo.shift(item);
    }
    console.log(closer);
})
}

//recalls the items marked as closed
//do not use find, it returns only one - filter scans whole array
function getClosedItems(){
  return closed;
}

// creates new todo array from open list minus items closed
function removeItem(itemId){
  const newTodo = todo.filter(function(item){
    return item.id !== itemId
  })
  todo = newTodo;
  return todo;
}

module.exports = {
  getTodoList: getTodoList,
  addItem: addItem,
  getClosedItems: getClosedItems,
  closeItem: closeItem,
  removeItem: removeItem
}
