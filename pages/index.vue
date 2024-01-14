<template>
    <div class="main-todo-section">
      <h1 class="heading-sec">My Todo App</h1>
      <div class="add-todo-section">
        <UInput inputClass="w-auto" v-model="newTask" placeholder="Add a new task" @keypress.enter="addNewTask" />
        <UButton @click="addNewTask">Add Task </UButton>
      </div>
      <div class="task-details-section">
        <div class="incompleted-section">
          <h2>Incomplete Tasks</h2>
          <ul>
            <li v-for="task in tasks.filter(t => !t.completed)" :key="task.id">
              {{ task.title }}
              <UButton @click="completeTask(task.id)">Mark as Completed</UButton>
            </li>
          </ul>
        </div>
        <div class="completed-section">
          <h2>Completed Tasks</h2>
          <ul>
            <li v-for="task in tasks.filter(t => t.completed)" :key="task.id">
              {{ task.title }}
              <span class="completed-text">Completed</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newTask: '',
        tasks: [],
        nextId: 0
      }
    },
    methods: {
      addNewTask() {
        if (this.newTask.trim() !== '') {
          this.tasks.push({
            id: this.nextId++,
            title: this.newTask,
            completed: false
          });
          this.newTask = '';
        }
      },
      completeTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
          task.completed = true;
        }
      }
    }
  }
  </script>
  