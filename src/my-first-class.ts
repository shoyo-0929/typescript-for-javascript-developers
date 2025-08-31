export {};

class Person {
  name: string;
  age: number;
  
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}
let taro = new Person('Taro', 30);
// let hanako = new Person();
console.log(taro.name);
console.log(taro.age);
console.log(taro.profile());

