import { Router } from "express";
import { ProductController } from "../controllers/ProductControler";

const router = Router();

router.get("/", ProductController.GetProducts);
router.post("/create", ProductController.create);
router.delete("/:id", ProductController.DeleteProduct);
router.patch("/edit/:id", ProductController.editProduct);

export default router;
