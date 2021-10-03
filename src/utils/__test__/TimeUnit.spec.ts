/*
 * @Author: 邵明
 * @Date: 2021-02-16 22:05:16
 * @Last Modified by: 邵明
 * @Last Modified time: 2022-02-03 17:21:41
 */
import * as TimeUnit from '@/utils/TimeUnit';

describe('time test', () => {
  test('time test', async () => {
    const time = new Date('2022-02-01');
    const timeEnd = TimeUnit.MonthNextEnd(0, time);
    const result = new Date('2022-02-28 23:59:59');
    expect(timeEnd).toEqual(result);
    expect(TimeUnit.dateformat(timeEnd)).toEqual('2022-02-28 23:59:59');
  });

  // });
});
