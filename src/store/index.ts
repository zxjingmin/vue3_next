import { createStore, ModuleTree } from 'vuex';

function importAllStore<S>() {
  const modules: ModuleTree<S> = {};
  const requireModules = import.meta.globEager('./modules/*.store.ts');
  // console.log(requireModules);

  for (const path in requireModules) {
    const modulesContent = requireModules[path];
    if (modulesContent.default) {
      const { name, ...module } = modulesContent.default;
      // 获取 PascalCase 命名
      // console.log(path.replace(/(.*)\/(.*)\.store\.ts$/, '$2'));
      const modulesName = name || path.replace(/^\.\/(.*)\.store\.ts$/, '$1');
      // console.log(modulesName);
      modules[modulesName] = { ...module };
    }
  }

  return modules;
}
export default createStore({
  modules: importAllStore(),
  getters: {},
});
