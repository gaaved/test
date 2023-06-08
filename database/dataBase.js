const sqlite3 = require('sqlite3').verbose();
const dataBase = new sqlite3.Database('test.sqlite');

dataBase.serialize(() => {
    const sql = `CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name NVARCHAR(160),
        age INTEGER,
        imageName NVARCHAR(160))`
    dataBase.run(sql)
});

module.exports = dataBase
