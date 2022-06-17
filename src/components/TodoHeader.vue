<template>
  <div class="todo-header">
    <div class="todo-input_box">
      <input
        type="text"
        class="todo-input"
        placeholder="请输入你的任务名称，按回车键确认"
        v-model="inputTodo"
        @keydown.enter="addTodo"
      />
    </div>
  </div>
</template>

<script>
import types from '@/store/mutation-types';
import { mapMutations, mapState } from 'vuex';
import { generateId } from '@/utils';
export default {
  name: 'TodoHeader',
  data () {
    return {
      inputTodo: '',
    };
  },
  computed: {
    ...mapState(['todos']),
  },
  methods: {
    ...mapMutations([types.ADD]),

    addTodo (event) {
      const value = event.target.value.trim();
      if (!this.isInputValid(value)) {
        return;
      }

      const todo = {
        id: generateId(),
        text: value,
        done: false,
        time: Date.now(),
      };

      this[types.ADD](todo);

      this.inputTodo = '';

      if (this.todos.length > 10) {
        this.$nextTick(() => {
          // ! 【TodoList 组件】 滚动到底部
          this.$parent.$refs.list.scrollToBottom();
        });
      }
    },
    /**
     * 内容验证
     * 1. 不能为空
     * 2. 不与其它项重复
     */
    isInputValid (value) {
      return value !== '' &&
        this.todos.every((todo) => todo.text !== value);
    },
  },
};
</script>

<style scoped lang="less">
@import "~assets/style/var.less";

.todo-header {
  .todo-input_box {
    border: 1px solid @color_border;
    border-radius: @radius;
    overflow: hidden;

    .todo-input {
      width: 100%;
      line-height: 38px;
      padding-left: 8px;
    }
  }
}
</style>
