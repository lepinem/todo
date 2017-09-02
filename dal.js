// dal.js
// this file contains the functions needed to process user inputs
let todo = require('./todo');
let open = require('./open');
let closed = require('./closed');

//displays the todo list (open)
function getOpenList(itemId){
  return open.filter(function(item){
    return !item.close
  })
}

// adds a new item to the todo list
function addItem(item){
  const newItem = {id:(todo.length + 1) + (closed.length), task: item, close:(false)};
    open.push(newItem);
    return open;
}

//removes closed item from the open items list
function closeItem(itemId){
  closed.map(function(item){
    if(item.id == itemId){
      item.close = true;
      // todo.shift(item);
      closed.push(item);
      return closed;
    }
    // console.log(closer);
})
}

//recalls the items marked as closed
//do not use find, it returns only one - filter scans whole array
function getClosedItems(item){
  return closed;
}

// creates new todo array from open list minus items closed
// function removeItem(itemId){
//   const newOpen = open.filter(function(item){
//     return item.id !== itemId
//   })
//   open = newOpen;
//   return open;
// }

// reactivates closed item (moves from closed to open)
function reactivateItem(itemId){
  const newClosed = closed.filter(function(item){
    return item.id = itemId
  })
  closed = newClosed;
  return closed;
}

function removeItem(itemId){
  return open.map(function(item){
    if(item.id == itemId){  // 2 parter this will assign false values to true
      item.close = true // and if there is no completed value at all it makes a completed value and marks it true
      console.log(item);
      closed.push(item)
      return item
    } else {
      return item
    }
  })
}

module.exports = {
  getOpenList: getOpenList,
  addItem: addItem,
  getClosedItems: getClosedItems,
  closeItem: closeItem,
  removeItem: removeItem,
  reactivateItem: reactivateItem
}
