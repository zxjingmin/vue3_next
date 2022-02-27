/*
 * @Author: 邵明
 * @Date: 2022-01-29 11:37:13
 * @Last Modified by:   邵明
 * @Last Modified time: 2022-01-29 11:37:13
 */

module.exports = function (plop) {
  plop.setWelcomeMessage('请选择需要创建的模式：');
  plop.setGenerator('page', require('./plop-templates/page/prompt'));
  plop.setGenerator('component', require('./plop-templates/component/prompt'));
  plop.setGenerator('store', require('./plop-templates/store/prompt'));
};
