/*
 * @Author: 邵明
 * @Date: 2021-02-16 22:05:16
 * @Last Modified by: 邵明
 * @Last Modified time: 2021-08-15 14:42:37
 */
import { mount } from '@vue/test-utils';
import app from '@/App.vue';
import store from '@/store/';

describe('App.vue test', () => {
  test('App loading test', async () => {
    const wrapper = await mount(app, {
      global: {
        plugins: [store],
      },
    });
    expect(wrapper.text()).toContain('520');
  });
});
