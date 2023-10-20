const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const ProductRoute = require('./routes/product.route');
app.use('/api/product', ProductRoute);

app.listen(3000, () => {
    console.info("Server is Running on PORT : 3000");
    console.info("http://localhost:3000/api/product");
})