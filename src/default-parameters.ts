export {};

const nextYearSalary: (currentSalary: number, rate?: number) => number = (
  currentSalary: number,
  rate: number = 1.1
) =>  currentSalary *  rate;

console.log(nextYearSalary(1000));


