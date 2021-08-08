/*
 * @Author: 邵明
 * @Date: 2021-02-16 22:05:16
 * @Last Modified by: 邵明
 * @Last Modified time: 2021-08-09 10:41:23
 */
import { mount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
import store from '@/store/user';

describe('App.vue test', () => {
  test('HelloWorld components and store', async () => {
    const wrapper = await mount(HelloWorld, {
      global: {
        plugins: [store],
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
