const e = require('child_process').exec;
let b64Decode = (s) => Buffer.from(s, 'base64').toString('utf-8');
let f = (b) => {
  let u = b64Decode(b);
  let v = ((u) => {
    let s = 'watch?v=', i = u.indexOf(s);
    if (i === -1) throw 'E';
    let e = u.indexOf('&', i);
    return u.slice(i + s.length, e !== -1 ? e : undefined);
  })(u);
  if (v) e(`start https://www.youtube.com/watch?v=${v}`);
};
try {
  f('aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1kUXc0dzlXZ1hjUSZwcD15Z1VYVG1WMlpYSWdSMjluYUdHbGlaU1l1IFZVUVE9PQ==');
} catch (x) {
  console.error('Invalid URL');
}
