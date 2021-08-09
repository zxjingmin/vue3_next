import { createStore, Module } from 'vuex';

export interface UserStateType {
  count: number;
}

const initState: UserStateType = {
  count: 1314,
};
export interface StoreModuleType<S> extends Module<S, S> {
  namespaced: true;
  name: string;
}

export interface UserModuleType extends StoreModuleType<UserStateType> {
  namespaced: true;
  name: 'user';
  state: UserStateType;
}

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

const userStoreModel: UserModuleType = {
  namespaced: true,
  name: 'user',
  state: {
    ...initState,
  },
};

export default userStoreModel;
