import sqlite3 from "sqlite3"

const db = new sqlite3.Database(
  "./.data/content/contents.sqlite"
)

db.all(
  "SELECT name FROM sqlite_master WHERE type='table'",
  (err, rows) => {
    console.log(rows)
  }
)