let str = 'site.ru sss site.com zzz site.net';
let res = str.match(/([A-z0-9]([A-z0-9\-]{0,61}[A-z0-9])?\.)+[A-z]{2,6}/g);