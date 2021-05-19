const Product = require('./product');

class ProductRepository_v2 {

    constructor() {
        this.products = new Map([
            ["09", new Product("09", "CREDIT_CARD", "Gem Visa", "2000 USD", 5)],
            ["10", new Product("10", "CREDIT_CARD", "28 Degrees", "1000 EUR", 4)],
            ["11", new Product("11", "PERSONAL_LOAN", "MyFlexiPay", "1500 VND", 3)],
        ]);
    }

    async fetchAll() {
        return [...this.products.values()]
    }
}

module.exports = ProductRepository_v2;
