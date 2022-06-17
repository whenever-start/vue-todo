import storage from '@/utils/storage';
import Vue from 'vue';
import Vuex from 'vuex';
import types from './mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: storage.get('todo', []),
    // 可选项：all done undone
    show: 'all',
  },
  getters: {
    doneTodos (state) {
      return state.todos.filter((todo) => todo.done);
    },
    undoneTodos (state) {
      return state.todos.filter((todo) => !todo.done);
    },
  },
  mutations: {
    [types.ADD] (state, todo) {
      state.todos.push(todo);
      this.commit(types.STORAGE);
    },
    [types.REMOVE] (state, index) {
      state.todos.splice(index, 1);
      this.commit(types.STORAGE);
    },
    [types.CLEAR_DONE_TODOS] (state) {
      state.todos = state.todos.filter((todo) => !todo.done);
      this.commit(types.STORAGE);
    },
    [types.TOGGLE_SHOW] (state, type) {
      state.show = type;
    },
    [types.STORAGE] (state) {
      storage.set('todo', state.todos);
    },
  },
});
