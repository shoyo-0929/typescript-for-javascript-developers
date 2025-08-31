export {};

class Person {
  name: string;
  private age: number;
  protected nationality: string;

  constructor(name: string, age: number, nationality: string = 'Japan') {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `Name: ${this.name}, Age: ${this.age}, Nationality: ${this.nationality} `;
  }
}

class Android extends Person {

  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
    
  }

  profile(): string {
    return `${super.profile()}`;
  }
}

let taro = new Person('Taro', 30, "USA");
// console.log(taro.name);
// console.log(taro.age);
console.log(taro.profile());
let hanako = new Android('Hanako', 25, "Japan");
console.log(hanako.profile());

