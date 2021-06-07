const controller = require('../../src/product/product.controller');
const Product = require('../../src/product/product');

const getProductsName = {
    "products name exist": () => {
        controller.repository.products = new Map([
            ["09", new Product("09", "CREDIT_CARD", "Gem Visa", "v1")],
            ["10", new Product("10", "CREDIT_CARD", "28 Degrees", "v1")],
            ["11", new Product("11", "PERSONAL_LOAN", "MyFlexiPay", "v2")]
        ]);
    },
    "no product name exists": () => {
        controller.repository.products = new Map();
    },
    "no auth token when getting product name": () => {
        // The default state of repository, it will get all products from the repository to verify the contract.
    }
}

module.exports = getProductsName
