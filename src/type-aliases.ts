export {};

type Mojiretsu = string;

const foostring: string = 'hello';
const fooMojiretsu: Mojiretsu = 'hello'; 

type Profile = {
  name: string,
  age: number,
}

const exsample1: Profile = {
  name: 'Ham',
  age: 43,
}

type Profile2 = typeof exsample1;
const exsample2: Profile2 = {
  name: 'Ham',
  age: 43,
}