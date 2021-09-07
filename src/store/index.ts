import { createStore, Module, ModuleTree } from 'vuex';

function importAllStore<S>() {
  const modules: ModuleTree<S> = {};
  const requireModules = import.meta.globEager('../store/*.store.ts');
  for (const path in requireModules) {
    const modulesConent = requireModules[path];
    if (modulesConent.default) {
      const { name, ...module } = modulesConent.default;
      // 获取 PascalCase 命名
      const modulesName = name || path.replace(/^\.\/(.*)\.store\.ts$/, '$1');

      modules[modulesName] = { ...module };
    }
  }

  return modules;
}
export default createStore({
  modules: importAllStore(),
  getters: {},
});
