export {};

abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return "Roar!";
  }
}

class Tiger extends Animal {
  cry() {
    return "grrrr";
  }
}

const lion = new Lion();
console.log(lion.cry()); // "Roar!"

const tiger = new Tiger();
console.log(tiger.cry()); // "Roar!"