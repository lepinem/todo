const dal = require ('./dal')

describe ('dal test', function () {
  test('this test tests that adding todo.length + closed.length + 1 increses the ID by 1', function () {
    const newTodo = 'figure out tests'
    expect(dal.getTodoList().length).toBe(3)
    dal.addItem(newTodo)
    expect(dal.getTodoList().length).toBe(4)

  } )
})
