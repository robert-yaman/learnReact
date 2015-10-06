function(root) {
  "use strict";

  var TodoStore = root.TodoStore = {};
  var _todos = [];
  var _callbacks = [];

  TodoStore.changed = function() {
    _callbacks.forEach(function(callback){
      callback();
    });
  };

  TodoStore.addChangedHandler = function (callback) {
    _callbacks.push(callback);
  };

  TodoStore.removeChangedHandler = function (callback) {
    //forthcoming
  };

  TodoStore.all = function() {
    return _todos
  };

  TodoStore.fetch = function() {
    $.ajax({
      url: "/api/todos",
      success: function(response) {
        _todos = JSON.parse(response);
      }
    });
  };

  TodoStore.destroy = function(id) {
    if (!_.find(_todos, function(todo){
      todo.id === id;
    })) return;

    $.ajax({
      url: "/api/todos/" + id,
      method: "delete"
    });

    this.changed();
  };

  TodoStore.toggleDone = function(id) {
    if (!_.find(_todos, function(todo){
      todo.id === id;
    })) return;

    $.ajax({
      url: "/api/todos/" + id,
      method: "PUT",
      contentType: "json",
      data: {todo: {done: true}}
    });

    this.changed();
  }
}(this);
