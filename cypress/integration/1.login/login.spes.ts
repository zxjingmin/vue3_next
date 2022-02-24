///<reference types="cypress"/>

describe('01.登录', function () {
  context('01.测试登录', function () {
    it('01.登录界面', () => {
      cy.visit('/login');
      cy.screenshot('1.name_01_01', { overwrite: true });
    });
  });
});
