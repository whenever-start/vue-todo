<template>
  <div id="app" class="todo">
    <TodoHeader />

    <div class="todo-main">
      <todo-list ref="list" />
    </div>

    <TodoFooter />
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoList,
    TodoFooter,
  },
};
</script>

<style lang="less">
@import "~assets/style/var.less";
/* ********** reset 分割线 ********** */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  line-height: 1;
}

ul {
  list-style: none;
}

input {
  border: none;
  outline: none;
}

.todo {
  border: 1px solid @color_border;
  border-radius: @radius;
  padding: 8px;
  width: 600px;
  margin: 50px auto 0;

  &-main {
    margin-top: 20px;
  }
}
</style>
