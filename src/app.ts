import express from "express";
import router from './routes/calculatorRoutes';
const PORT = 3000;




const app = express();

app.use("/calculator", router) // /subtract?a=3&b=2
app.listen(PORT, () => console.log("Listening on port", PORT))