/*
 * @Author: 邵明
 * @Date: 2021-02-16 22:05:16
 * @Last Modified by: 邵明
 * @Last Modified time: 2021-08-15 14:39:24
 */
import { mount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
import store from '@/store/index';

describe('HelloWorld.vue test', () => {
  test('HelloWorld components and store', async () => {
    const wrapper = await mount(HelloWorld, {
      global: {
        plugins: [store],
      },
    });
    expect(wrapper.text()).toContain('520');
    // expect(wrapper.html()).toMatchSnapshot();
  });
});
