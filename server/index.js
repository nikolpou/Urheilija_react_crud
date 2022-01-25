// SERVERI

const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

// YHTEYS TIETOKANTAAN
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "root",
  database: "urheilija_db",
});

app.post("/luo", (req, res) => {
  console.log(req.body);
  const etunimi = req.body.etunimi;
  const sukunimi = req.body.sukunimi;
  const kutsumanimi = req.body.kutsumanimi;
  const syntymavuosi = req.body.syntymavuosi;
  const paino = req.body.paino;
  const laji = req.body.laji;
  const saavutukset = req.body.saavutukset;
  const linkkikuvaan = req.body.linkkikuvaan;

  db.query(
    "INSERT INTO urheilijat (etunimi, sukunimi, kutsumanimi, syntymavuosi, paino, laji, saavutukset, linkkikuvaan) VALUES (?, ?, ?, ?, ?, ?, ? ,?)",
    [
      etunimi,
      sukunimi,
      kutsumanimi,
      syntymavuosi,
      paino,
      laji,
      saavutukset,
      linkkikuvaan,
    ],
    (err, result) => {
      if (err) {
        console.error(err);
      } else {
        res.send("Perille meni");
      }
    }
  );
});

app.get("/urheilijat", (req, res) => {
  db.query("SELECT * FROM urheilijat", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//app.put("/paivita", (req, res) => {
//  const id = req.body.id;
//  const etunimi = req.body.etunimi;
//  db.query(
//    "UPDATE urheilijat SET etunimi = ? WHERE id = ?",
//    [etunimi, id],
//    (err, result) => {
//      if (err) {
//        console.log(err);
//      } else {
//        res.send(result);
//      }
//    }
//  );
//});

app.put("/paivita", (req, res) => {
  const id = req.body.id;
  const etunimi = req.body.etunimi;
  const sukunimi = req.body.sukunimi;
  const kutsumanimi = req.body.kutsumanimi;
  const syntymavuosi = req.body.syntymavuosi;
  const paino = req.body.paino;
  const laji = req.body.laji;
  const saavutukset = req.body.saavutukset;
  const linkkikuvaan = req.body.linkkikuvaan;
  db.query(
    "UPDATE urheilijat SET etunimi = ?, sukunimi = ?, kutsumanimi = ?, syntymavuosi = ?, paino = ?, laji = ?, saavutukset = ?, linkkikuvaan = ? WHERE id = ?",
    [
      etunimi,
      sukunimi,
      kutsumanimi,
      syntymavuosi,
      paino,
      laji,
      saavutukset,
      linkkikuvaan,
      id,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/poista/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM urheilijat WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("HeyHeyyy from port 3001");
});
