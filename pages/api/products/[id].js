import { products } from "../../../data/products";

export default function handler(req, res) {
    const { query } = req;
    const product = products.find(product => product.id === query.id);
    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json({
            message: "Product not found"
        });
    }
}