const controller = require('../../src/product/product.controller');
const Product = require('../../src/product/product');

const getOneProduct = {
    "product with ID 10 exists": () => {
        controller.repository.products = new Map([
            ["10", new Product("10", "CREDIT_CARD", "28 Degrees", "v1")]
        ]);
    },
    "product with ID 12 does not exist": () => {
        // The default state of repository, it will get all products from the repository to verify the contract.
    },
    "no auth token when getting one product": () => {
        // The default state of repository, it will get all products from the repository to verify the contract.
    }
}

module.exports = getOneProduct
