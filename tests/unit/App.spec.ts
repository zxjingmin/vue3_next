/*
 * @Author: 邵明
 * @Date: 2021-02-16 22:05:16
 * @Last Modified by: 邵明
 * @Last Modified time: 2021-08-09 16:33:05
 */
import { mount } from '@vue/test-utils';
import App from '@/App.vue';
import store from '@/store/index';

describe('App.vue test', () => {
  test('App loading test', async () => {
    const wrapper = await mount(App, {
      global: {
        plugins: [store],
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
