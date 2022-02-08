/*
 * @Author: 邵明
 * @Date: 2021-02-16 22:05:16
 * @Last Modified by: 邵明
 * @Last Modified time: 2022-02-03 16:23:17
 */
import * as TimeUnit from '@/utils/TimeUnit';

describe('url test', () => {
  test('url test', async () => {
    const value =
      'file:///storage/emulated/0/Android/data/io.dcloud.HBuilder/apps/HBuilder/www/dist/index.html#SmockBox?user_id=1482194904883982337';
    const re = /^(?<base>.*?)#(?<router>.*?)\?(?<param>.*?)$/gi;
    const result = re.exec(value);

    expect(result?.groups?.router).toEqual('SmockBox');
  });
});
