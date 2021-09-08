/*
 * @Author: 邵明
 * @Date: 2021-02-16 22:05:16
 * @Last Modified by: 邵明
 * @Last Modified time: 2021-08-21 12:09:35
 */
import { mount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
import store from '@/store/index';
import elementPlus from 'element-plus';

describe('HelloWorld.vue test', () => {
  test('HelloWorld components and store', async () => {
    const wrapper = await mount(HelloWorld, {
      global: {
        plugins: [store, elementPlus],
      },
    });
    // expect(wrapper.find('.hello').html()).toContain('520');

    expect(wrapper.find('.hello').text()).toContain('520');
  });

  test('HelloWorld components and navie button', async () => {
    const wrapper = await mount(HelloWorld, {
      global: {
        plugins: [store, elementPlus],
      },
    });
    // expect(wrapper.find('.hello').html()).toContain('520');
    // expect(wrapper.findComponent('.n-button').text()).toContain('Submit');
    expect(wrapper.find('.el-button').exists()).toBe(true);
    expect(wrapper.find('.el-button').isVisible()).toBe(true);
  });
  // });
});
