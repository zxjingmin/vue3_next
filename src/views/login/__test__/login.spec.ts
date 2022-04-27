/*
 * @Author: 邵明
 * @Date: 2021-02-16 22:05:16
 * @Last Modified by: 邵明
 * @Last Modified time: 2022-01-29 13:21:15
 */
import { mount } from '@vue/test-utils';
import Login from '../LoginPage.vue';
import store from '@/store/index';
import elementPlus from 'element-plus';

describe('Login.vue test', () => {
  test('Login component', async () => {
    const wrapper = await mount(Login, {
      global: {
        plugins: [elementPlus, store],
      },
    });

    expect(wrapper.find('form').exists()).toBe(true);
    // expect(wrapper.html()).toMatchSnapshot();
  });

  // });
});
