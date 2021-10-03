/*
 * @Author: 邵明
 * @Date: 2021-02-16 22:05:16
 * @Last Modified by: 邵明
 * @Last Modified time: 2022-02-03 18:47:03
 */
import { mount } from '@vue/test-utils';
import App from '@/App.vue';
import store from '@/store/index';
import router from '@/router/index';
import elementPlus from 'element-plus';

describe('Login.vue test', () => {
  test('Login component', async () => {
    const wrapper = await mount(App, {
      global: {
        plugins: [elementPlus, store, router()],
      },
    });
    // expect(wrapper.html()).toMatchSnapshot();
  });
});
