import { createStore } from 'vuex';

const user = createStore({
  state() {
    return {
      count: 100000,
    };
  },
  mutations: {
    increment(state: any) {
      state.count += 1;
    },
  },
});

export default user;
