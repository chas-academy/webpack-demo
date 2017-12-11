import _ from 'lodash';

console.log(
  _.join(['Calc', 'module', 'loaded!'], ' ')
);

export function add(a, b) {
  return a + b;
}

export function square(x) {
  return x * x;
}

export function cube(x) {
  return x * x * x;
}