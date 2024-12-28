 export type ArithmeticOperation = "sum" | "subtract"| "multiply" | "divide";


export default class CalculatorService implements  Record<ArithmeticOperation, (a: number,b: number)=>number>{
    sum = (a: number,b: number) => a+b;
    subtract = (a: number,b: number) => a-b;
    multiply = (a: number,b: number) => a*b;
    divide = (a: number,b: number) => a/b;



}