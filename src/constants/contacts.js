const path = require('node:path');

const PATH_DB = path.join(__dirname, '../db/db.json');

module.exports = {
    PATH_DB,
};

console.log(PATH_DB);
