export const MonthNextEnd = (num: number, currentDate: Date = new Date()): Date => {
  const number = 3600 * 24 * 1000;
  const offsetGMT = new Date().getTimezoneOffset();
  currentDate.setTime(Math.floor(currentDate.getTime() / number) * number + offsetGMT * 60000);
  currentDate.setMonth(currentDate.getMonth() + 1 + num);
  currentDate.setDate(1);
  currentDate.setTime(currentDate.getTime() - 1000);
  return currentDate;
};

export const dateformat = function (current: Date = new Date(), fmt = 'yyyy-MM-dd hh:mm:ss') {
  // const offsetGMT = new Date().getTimezoneOffset();
  // current.setTime(current.getTime() + offsetGMT *60000);
  // console.log('offsetGMT:'+offsetGMT);
  const o: { [key: string]: number } = {
    'M+': current.getMonth() + 1, //月份
    'd+': current.getDate(), //日
    'h+': current.getHours(), //小时
    'm+': current.getMinutes(), //分
    's+': current.getSeconds(), //秒
    'q+': Math.floor((current.getMonth() + 3) / 3), //季度
    S: current.getMilliseconds(), //毫秒
  };

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (current.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let k: keyof typeof o;
  for (k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? '' + o[k] : ('00' + o[k]).substr(o[k].toString().length)
      );
    }
  }
  return fmt;
};
