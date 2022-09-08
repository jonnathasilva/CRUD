import express from "express";
import mongoose from "mongoose";
import ProductRouter from "./routers/ProductRouter";

const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://0.0.0.0:27017/teste")
  .then(() => {
    console.log("Conectou ao mongoose!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/", ProductRouter);

app.listen(5000, () => {
  console.log("serve rodando na port", 5000);
});
