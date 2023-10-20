const router = require('express').Router();

const product = require('../data');

// Get All Products
router.get('/', (req, res) => {
    return res.send(product);
})

// Get Porduct By Id
router.get('/:id', (req, res) => {
    const productRes = product.find(x => x.id === req.params.id);

    if (!productRes) return res.status(404).send({ code: 404, message: "No Product Found" })
    return res.send(productRes);
})

// Insert Porduct
router.post('/', (req, res) => {
    const length = product.length;
    const productData = {
        id: `P-${Math.round(Math.random() * 10000000)}`,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        qty: req.body.qty
    };

    product.push(productData);

    if (product.length <= length) return res.status(400).send({ code: 400, message: "Product Insertion Failed" })
    return res.status(201).send({ code: 201, message: "Product Insertion Successful" });
})

// Delete Product
router.delete('/:id', (req, res) => {
    const length = product.length;
    const productIndex = product.findIndex(product => product.id === req.params.id);

    if (productIndex === -1) return res.status(404).json({ error: "Product not found" });
    product.splice(productIndex, 1);

    if (product.length == length) return res.status(400).send({ code: 400, message: "Product Deletion Failed" })
    return res.status(200).json({ message: "Product deleted successfully" });
})

// Update Product
router.put('/:id', (req, res) => {
    const length = product.length;

    const productIndex = product.findIndex(product => product.id === req.params.id);

    if (productIndex === -1) return res.status(404).json({ error: "Product not found" });

    const productData = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        qty: req.body.qty
    };

    product[productIndex] = { ...product[productIndex], ...productData };

    return res.status(200).json({ message: "Product update successfully" });
})

module.exports = router;