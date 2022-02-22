///<reference types="cypress"/>
import { mount } from '@cypress/vue';
import NavigationBtn from '../../../src/views/a';

describe('01.登录', function () {
  const name = 'shaoming';
  const password = 'abc123';
  context('01.测试登录', function () {
    it('01.登录界面', () => {
      cy.visit('/#/login');
      cy.get('.old_value').contains('hello');
      cy.screenshot('1.name_01_01', { overwrite: true });
      cy.pause();
      cy.get('button').click();
      cy.get('.old_value').contains('world');
      cy.screenshot('1.name_01_02', { overwrite: true });
    });
  });
});