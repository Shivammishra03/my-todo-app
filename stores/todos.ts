import { defineStore } from 'pinia';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
interface TodosState {
  todos: Todo[];
}

export const useMyTodosStore = defineStore({
  id: 'myTodosStore',
  state: (): TodosState => ({
    todos: [],
  }),
  getters: {
    completedTodos: (state): Todo[] => state.todos.filter((todo) => todo.completed),
    incompletedTodos: (state): Todo[] => state.todos.filter((todo) => !todo.completed),
  },
  actions: {
    addTodo(todo: Todo): void {
      this.todos.push(todo);
    },
    toggleTodoStatus(todoId: number): void {
      const todo = this.todos.find((t) => t.id === todoId);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});
