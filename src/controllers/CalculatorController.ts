import {Query} from "express-serve-static-core"
import CalculatorService, {ArithmeticOperation} from '../services/CalculatorService';

export default class CalculatorController{

    private calculatorService = new CalculatorService();



    calculate(operation: ArithmeticOperation, {a,b}: Query): Promise<string> {
        return new Promise((resolve, reject)=> {
            if((a==null) || (b == null)) {
                reject(new Error("Missing parameters"));
            } else {
              const n = this.calculatorService[operation](+a,+b);
              resolve(`${operation}(${a},${b})=${n}`)
            }
        })
    }
}