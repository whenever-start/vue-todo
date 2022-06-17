<template>
  <li class="todo-list-item">
    <div class="todo-checkbox"><input type="checkbox" :checked="done" @change="$emit('select',$event.target.checked)" /></div>
    <div class="todo-text">{{text}}</div>
    <div class="btn-close" @click="$emit('remove-todo')">X</div>
  </li>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: {
    text: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style></style>
