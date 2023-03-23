const initState = {
  filters: {
    search: "",
    status: "All",
    priority: [],
  },
  todoList: [
    { id: 1, name: "Learn React", completed: false, priority: "Medium" },
    { id: 2, name: "Learn English", completed: false, priority: "High" },
    { id: 3, name: "Learn Flutter", completed: true, priority: "Low" },
  ],
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case "filters/searchFilterChange":
      return {
        ...state,
        filters: {
          ...state.filters,
          search: action.payload,
        },
      };
    default:
      return state;
  }
};
export default rootReducer;
