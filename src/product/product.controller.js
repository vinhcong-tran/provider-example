// // /// Version 1
// const ProductRepository = require("./product.repository");
//
// const repository = new ProductRepository();
//
// exports.getAll = async (req, res) => {
//     res.send(await repository.fetchAll())
// };
//
// exports.repository = repository;

/// Version 2
const ProductRepository_v2 = require("./product.repository_v2");

const repository_v2 = new ProductRepository_v2();

exports.getAll = async (req, res) => {
    res.send(await repository_v2.fetchAll())
};

exports.repository = repository_v2;
