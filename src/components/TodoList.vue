<template>
  <ul class="todo-list" ref="todoList">
    <todo-list-item
      :class="{ active: todo.done }"
      v-for="(todo, index) in show === 'all'
        ? todos
        : show === 'done'
        ? doneTodos
        : undoneTodos"
      :key="todo.id"
      :text="todo.text"
      :done="todo.done"
      @select="select(todo, $event)"
      @remove-todo="removeTodo(index)"
    />
  </ul>
</template>

<script>
import types from '@/store/mutation-types';
import { mapGetters, mapMutations, mapState } from 'vuex';
import TodoListItem from './TodoListItem.vue';
export default {
  name: 'TodoList',
  components: { TodoListItem },
  computed: {
    ...mapState(['todos', 'show']),
    ...mapGetters(['doneTodos', 'undoneTodos']),
  },
  methods: {
    ...mapMutations([types.REMOVE, types.STORAGE]),
    scrollToBottom () {
      this.$refs.todoList.scrollTop = this.$refs.todoList.scrollHeight;
    },
    removeTodo (index) {
      this[types.REMOVE](index);
    },
    select (todo, checked) {
      todo.done = checked;
      this[types.STORAGE]();
    },
  },
};
</script>

<style lang="less">
@import "~assets/style/var.less";

.todo-list {
  border: 1px solid @color_border;
  border-radius: @radius;
  height: 380px;
  overflow-y: auto;

  &-item {
    position: relative;
    display: flex;
    align-items: center;
    height: 38px;
    border-top: 1px solid @color_border;
    padding-left: 8px;

    &.active {
      color: @color_assist;
    }

    .todo-text {
      margin-left: 8px;
      flex: 1;
    }

    &:first-of-type {
      border-top: none;
    }

    // 按钮
    .btn-close {
      display: none;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 20px;
      width: 16px;
      height: 16px;
      line-height: 16px;
      color: @color_border;
      text-align: center;
      font-size: 12px;
      border: 1px solid @color_border;
      border-radius: 50%;
      cursor: pointer;
    }

    &:hover .btn-close {
      display: block;
    }
  }
}
</style>
