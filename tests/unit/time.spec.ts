/*
 * @Author: 邵明
 * @Date: 2021-02-16 22:05:16
 * @Last Modified by: 邵明
 * @Last Modified time: 2022-01-27 01:33:15
 */
import { mount } from '@vue/test-utils';

describe('Time test', () => {
  /**
   * 睡觉时间：21:30:00
   * 起床时间：7:20:00
   *  21 > 7  24+7
   *  计算非睡觉时间.
   */

  test('test ', async () => {
    const sleepStart = '1:30:00';
    const sleepEnd = '7:00:00';
    const startM =
      Number.parseInt(sleepStart.split(':')[0]) * 60 + Number.parseInt(sleepStart.split(':')[1]);
    let endM =
      Number.parseInt(sleepEnd.split(':')[0]) * 60 + Number.parseInt(sleepEnd.split(':')[1]);
    if (endM < startM) {
      endM += 24 * 60;
    }
    console.log(
      `start:${endM},end:${startM}
      分钟：${(endM - startM) / 18}
      小时：${Math.floor((endM - startM) / 60)}:${(endM - startM) % 60}`
    );
  });
});
