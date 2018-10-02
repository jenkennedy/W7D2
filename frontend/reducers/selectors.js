export const allTodos = (state) => {
  const keys = Object.keys(state.todos);
  const todosArray = [];
  keys.forEach(key => {
    todosArray.push(state.todos[key]);
  });

  return todosArray;
};
