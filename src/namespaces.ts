export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person("ハムさん");
const meOsaka = new Japanese.Osaka.Person("ハムやん");
console.log(me.name);
console.log(meOsaka.name);

const Mikel = new English.Person("Mikel", "Josef", "Jackson");
console.log(Mikel.firstName + " " + Mikel.middleName + " " + Mikel.lastName);
