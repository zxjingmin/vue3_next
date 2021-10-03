/*
 * @Author: 邵明
 * @Date: 2021-02-16 22:05:16
 * @Last Modified by: 邵明
 * @Last Modified time: 2022-01-27 01:33:15
 */
import { mount } from '@vue/test-utils';
import DynamicForm from '@/components/dynamic/DynamicForm.vue';
import store from '@/store/index';
import elementPlus from 'element-plus';
import { FormItemType } from '../dynamic/types.d';

const formItem: FormItemType[] = [
  {
    name: 'name',
    label: '姓名',
    type: 'text',
    default: 'jingmin',
  },
  {
    name: 'address',
    label: '地区',
    type: 'select',
    list: ['上海', '天津', '湖北'],
  },

];
describe('Dynamic.vue test', () => {
  
  test('test ', async () => {
    const wrapper = await mount(DynamicForm, {
      global: {
        plugins: [store, elementPlus],
      },
      props: {
        formItem,
      },
    });
    await wrapper.find('button').trigger('click');
  });
});

