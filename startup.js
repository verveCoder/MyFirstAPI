const sqlite3  = require('sqlite3') 

const sql = sqlite3

const db = new sql.Database('./database.db')

db.run(`CREATE TABLE IF NOT EXISTS students (
    id        INTEGER PRIMARY KEY AUTOINCREMENT,
    name      TEXT,
    surname   TEXT,
    image     TEXT,
    yourgroup TEXT,
    age       INTEGER DEFAULT (2131034112)     
);
`)