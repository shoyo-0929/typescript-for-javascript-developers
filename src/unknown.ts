export {};

const kansu = (): number => 43;

let numberUnknown: unknown = kansu();

if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
  console.log(sumUnknown);
}

