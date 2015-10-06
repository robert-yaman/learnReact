var TodoList = React.createClass = ({
  getInitialState: function() {
    return { todos: TodoStore.all() };
  },

  render: function () {
    return (
      <ul>
        {
          this.state.todos.map(function(todo){
            return <li key={todo.id}>{todo.title}</li>;
          })
        }
      </ul>
    );
  }
});
