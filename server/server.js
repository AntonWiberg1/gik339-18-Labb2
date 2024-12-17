const express = require("express"); // Den här gör att vi kan använda express. + npm install express sqlite3 --save.
const server = express();
const sqlite3 = require("sqlite3").verbose(); // uppgift 3. npm install express sqlite3 --save.

server
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
  });

server.listen(3000, () => {
  // lyssnar på servern samt Samt npm start i terminalen.
  console.log("Server running on http://localhost:3000");
});

server.get("/users", (req, res) => {
  const db = new sqlite3.Database("./gik339-labb2.db"); // uppgift 3
  const sql = "SELECT * FROM users";
  db.all(sql, (err, rows) => {
    if (err) {
      // uppgift 2. Här körs callbackfunktionen. Det är en statusförfrågan och till adress http://localhost:3000/users. Req = request, det är vilken HTTP-förfrågan det är.
      res.status(500).send(err);
    } else {
      res.send(rows); // res = response. Tar skickar tillbaka användarna från databasen. Både status och send skickar response.
    }
  });
  db.close();
});
