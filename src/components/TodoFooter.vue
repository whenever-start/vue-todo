<template>
  <div class="todo-footer">
    <div class="todo-checkbox"><input type="checkbox" :checked="isAll" @change="toggleAll"/></div>

    <div class="todo-footer-menu">
      <span class="menu-item" :class="{'active':show === 'all'}" @click="toggleShow('all')">全部{{todos.length}}</span>
      <span class="menu-item" :class="{'active':show === 'done'}" @click="toggleShow('done')">已完成{{doneTodos.length}}</span>
      <span class="menu-item" :class="{'active':show === 'undone'}" @click="toggleShow('undone')">未完成{{undoneTodos.length}}</span>
    </div>

    <div class="btn-clear" @click="clearDoneTodos">清除已完成任务</div>
  </div>
</template>

<script>
import types from '@/store/mutation-types';
import { mapGetters, mapMutations, mapState } from 'vuex';
export default {
  name: 'TodoFooter',
  computed: {
    ...mapState(['todos', 'show']),
    ...mapGetters(['doneTodos', 'undoneTodos']),
    isAll () {
      // return this.todos.every((todo) => todo.done);
      return this.undoneTodos.length === 0 && this.todos.length > 0;
    },
  },
  methods: {
    ...mapMutations({
      clearDoneTodos: types.CLEAR_DONE_TODOS,
      toggleShow: types.TOGGLE_SHOW,
      storage: types.STORAGE,
    }),
    toggleAll (event) {
      const checked = event.target.checked;
      if (checked) {
        this.undoneTodos.forEach((todo) => {
          todo.done = checked;
        });
      } else {
        this.doneTodos.forEach((todo) => {
          todo.done = checked;
        });
      }
      this.storage();
    },
  },
};
</script>

<style lang="less" scoped>
@import "~assets/style/var.less";

.todo-footer {
  position: relative;
  display: flex;
  align-items: center;
  height: 30px;
  margin-top: 20px;
  padding-left: 9px;

  .todo-footer-menu {
    margin-left: 20px;

    .menu-item {
      margin-left: 10px;
      padding: 4px 8px;

      &.active {
        color: #fff;
        background-color: @color_main;
      }
    }
  }

  .btn-clear {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    padding: 8px 12px;
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
    border-radius: @radius;
    cursor: pointer;
  }
}
</style>
