/*
 * @Author: 邵明
 * @Date: 2021-02-16 22:05:16
 * @Last Modified by: 邵明
 * @Last Modified time: 2021-08-29 17:51:21
 */
import { mount } from '@vue/test-utils';
import Login from '../login.vue';
import elementPlus from 'element-plus';

describe('Login.vue test', () => {
  test('Login componente', async () => {
    const wrapper = await mount(Login, {
      global: {
        plugins: [elementPlus],
      },
    });

    expect(wrapper.find('form').exists()).toBe(true);
    // expect(wrapper.html()).toMatchSnapshot();
  });

  // });
});
