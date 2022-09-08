import { Product } from "../models/Product";
import { Request, Response } from "express";

export class ProductController {
  static async create(req: Request, res: Response) {
    const { name, price } = req.body;

    if (!name || name === " ") {
      return res.status(400).json({ message: "Nome e obrigatório" });
    }

    if (!price || price === " ") {
      return res.status(400).json({ message: "Preço e obrigatório" });
    }

    try {
      const NEW = await Product.create({
        name,
        price,
      });

      return res.status(200).json(NEW);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async GetProducts(req: Request, res: Response) {
    const products = await Product.find();

    res.status(200).json(products);
  }

  static async DeleteProduct(req: Request, res: Response) {
    const id = req.params.id;

    const product = await Product.findOne({ _id: id });

    if (!product) {
      return res.status(400).json({ message: "Produto não foi encontrado" });
    }

    await Product.deleteOne({ _id: id });
    return res.status(200).json({ message: "Deletado" });
  }

  static async editProduct(req: Request, res: Response) {
    const id = req.params.id;
    const { name, price } = req.body;

    if (!name || name === " ") {
      return res.status(400).json({ message: "Nome e obrigatório" });
    }

    if (!price || price === " ") {
      return res.status(400).json({ message: "Preço e obrigatório" });
    }

    const newProduct = { name, price };

    try {
      await Product.updateOne({ _id: id }, newProduct);
      return res.status(200).json(newProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
