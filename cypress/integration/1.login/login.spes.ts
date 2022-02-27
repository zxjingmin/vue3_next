///<reference types="cypress"/>
import { mount } from '@cypress/vue';
import login from '../../../src/views/login/login.vue';

describe('01.登录', function () {
  context('01.测试登录', function () {
    it('01.登录界面', () => {
      cy.viewport(500, 800);
      mount(login);
    });
  });
});
