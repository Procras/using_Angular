toDoApp.controller('ToDoController', ['ToDoService', 'ToDoFactory', function(ToDoService, ToDoFactory) {
  var self = this;

  self.todos = ToDoService.getAll();

  self.addToDo = function(todoText) {
    self.todos.push(new ToDoFactory(todoText));
  };

  self.removeToDo = function() {
    self.todos.pop();
  };

  self.delete = function(todo) {
    for (var i = 0; i < self.todos.length; i++) {
      if (self.todos[i].text === todo.text) {
          self.todos.splice(i, 1);
          break;
      };
    };
  };
}]);
