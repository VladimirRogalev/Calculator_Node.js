import {Router, Request, Response} from 'express';
import CalculatorController from '../controllers/CalculatorController';
import {ArithmeticOperation} from '../services/CalculatorService';


const router = Router();

const controller = new CalculatorController();

function handleRequest(operation: ArithmeticOperation, {query}:Request, response: Response) {

     controller.calculate(operation, query)
        .then(v => response.send(v))
         .catch(e => response.status(400).send(e.message));
}

router.get("/sum",(req, res)=> handleRequest("sum", req, res));
router.get("/subtract", (req, res)=> handleRequest("subtract", req, res));
router.get("/multiply",(req, res)=> handleRequest("multiply", req, res));
router.get("/divide",(req, res)=> handleRequest("divide", req, res));


export default router;