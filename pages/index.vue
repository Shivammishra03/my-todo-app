<template>
  <div class="main-todo-section">
    <h1 class="heading-sec">My Todo App</h1>
    <div class="add-todo-section">
      <UForm class="add-todo-section" @submit="addNewTask">
        <UInput inputClass="w-auto" v-model="newTask" placeholder="Add a new task" @keypress.enter="addNewTask" />
          <div class="input-errors helvetica-regular" v-for="error of v$.newTask.$errors" :key="error.$uid">
            <div class="error-msg">{{ error.$message }}</div>
          </div>
        <UButton type="submit">Add Task</UButton>
      </UForm>
    </div>
    <div class="task-details-section">
      <div class="incompleted-section">
        <h2>Incomplete Tasks</h2>
        <ul>
          <li v-for="task in incompletedTodos" :key="task.id">
            {{ task.title }}
            <UButton @click="toggleTodoStatus(task.id)">Mark as Completed</UButton>
          </li>
        </ul>
      </div>
      <div class="completed-section">
        <h2>Completed Tasks</h2>
        <ul>
          <li v-for="task in completedTodos" :key="task.id">
            {{ task.title }}
            <span class="completed-text">Completed</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
  
<script>
import { useMyTodosStore } from '~/stores/todos';
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
export default {
  data() {
    return {
      newTask: '',
    }
  },
  setup () {
    return { v$: useVuelidate() }
  },
  computed: {
    completedTodos() {
      return useMyTodosStore().completedTodos;
    },
    incompletedTodos() {
      return useMyTodosStore().incompletedTodos;
    },
  },
  methods: {
    addNewTask() {
      const isFormCorrect = this.v$.$validate();
      const title = this.newTask.trim();
      if (isFormCorrect) {
        if (title) {
          useMyTodosStore().addTodo({
            id: Date.now(),
            title,
            completed: false,
          });
          this.newTask = '';
        }
      }
    },
    toggleTodoStatus(todoId) {
      useMyTodosStore().toggleTodoStatus(todoId);
    },
  },
  validations () {
    return {
      newTask: { required }, // Matches this.firstName
    }
  }
}
</script>
  