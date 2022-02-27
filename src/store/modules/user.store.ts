import { createStore, Module } from 'vuex';

export interface UserStateType {
  count: number;
}

const initState: UserStateType = {
  count: 520,
};
export interface StoreModuleType<S> extends Module<S, S> {
  namespaced: true;
  name: string;
}

export interface UserModuleType extends StoreModuleType<UserStateType> {
  namespaced: true;
  name: 'user';
  state: UserStateType;
  getters: {
    count: (state: UserStateType) => number;
  };
}

const userStoreModel: UserModuleType = {
  namespaced: true,
  name: 'user',
  state: {
    ...initState,
  },
  getters: {
    count(state: UserStateType): number {
      return state.count;
    },
  },
};

export default userStoreModel;
