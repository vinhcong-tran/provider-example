const controller = require('../../src/product/product.controller');

const getAllProducts = {
    "all products exist": () => {
        // The default state of repository, it will get all products from the repository to verify the contract.
    },
    "no product exists": () => {
        controller.repository.products = new Map();
    },
    "no auth token when getting all products": () => {
        // The default state of repository, it will get all products from the repository to verify the contract.
    }
}

module.exports = getAllProducts
