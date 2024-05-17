// model/dataAccess.js
const sqlite3 = require('sqlite3').verbose();

// Veritabanına bağlan
const db = new sqlite3.Database('C:/Users/yunus/Source/repos/ilanSayfasi/model/advertDB.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the database.');
    }
});

module.exports = db;
