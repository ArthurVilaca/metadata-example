const db = require('../db')

module.exports = { index: index };

async function index(req, res, next) {
    let books = await db.Books.findAndCountAll({
        offset: parseInt(req.query.rowsPerPage || 10) * parseInt(req.query.page || 0),
        limit: parseInt(req.query.rowsPerPage || 10)
    });
    res.json({ books: books.rows, total: books.count})
}
