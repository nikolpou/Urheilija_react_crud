import "./App.css";
import { useState } from "react";
import Axios from "axios";
import ReactDOM from "react-dom";
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import Navbar from "./components/Navbar.js";

function App() {
  const [etunimi, setEtunimi] = useState("");
  const [sukunimi, setSukunimi] = useState("");
  const [kutsumanimi, setKutsumanimi] = useState("");
  const [syntymavuosi, setSyntymavuosi] = useState(0);
  const [paino, setPaino] = useState("");
  const [laji, setLaji] = useState("");
  const [saavutukset, setSaavutukset] = useState("");
  const [linkkikuvaan, setLinkkikuvaan] = useState("");

  const [newEtunimi, setNewEtunimi] = useState("");
  const [newSukunimi, setNewSukunimi] = useState("");
  const [newKutsumanimi, setNewKutsumanimi] = useState("");
  const [newSyntymavuosi, setNewSyntymavuosi] = useState(0);
  const [newPaino, setNewPaino] = useState("");
  const [newLaji, setNewLaji] = useState("");
  const [newSaavutukset, setNewSaavutukset] = useState("");
  const [newLinkkikuvaan, setNewLinkkikuvaan] = useState("");

  const [urheilijatLista, setUrheilijatLista] = useState([]);

  const lisaaUrheilija = () => {
    Axios.post("http://localhost:3001/luo", {
      etunimi: etunimi,
      sukunimi: sukunimi,
      kutsumanimi: kutsumanimi,
      syntymavuosi: syntymavuosi,
      paino: paino,
      laji: laji,
      saavutukset: saavutukset,
      linkkikuvaan: linkkikuvaan,
    }).then((response) => {
      console.log("Success!");
      setUrheilijatLista([
        ...urheilijatLista,
        {
          etunimi: etunimi,
          sukunimi: sukunimi,
          kutsumanimi: kutsumanimi,
          syntymavuosi: syntymavuosi,
          paino: paino,
          laji: laji,
          saavutukset: saavutukset,
          linkkikuvaan: linkkikuvaan,
        },
      ]);
    });
  };

  const getUrheilijat = () => {
    Axios.get("http://localhost:3001/urheilijat", {
      etunimi: etunimi,
      sukunimi: sukunimi,
      kutsumanimi: kutsumanimi,
      syntymavuosi: syntymavuosi,
      paino: paino,
      laji: laji,
      saavutukset: saavutukset,
      linkkikuvaan: linkkikuvaan,
    }).then((response) => {
      setUrheilijatLista(response.data);
    });
  };

  const paivitaUrheilijaEtunimi = (id) => {
    Axios.put("http://localhost:3001/paivita", {
      etunimi: newEtunimi,
      sukunimi: newSukunimi,
      kutsumanimi: newKutsumanimi,
      syntymavuosi: newSyntymavuosi,
      paino: newPaino,
      laji: newLaji,
      saavutukset: newSaavutukset,
      id: id,
    }).then((response) => {
      setUrheilijatLista(
        urheilijatLista.map((val) => {
          return val.id === id
            ? {
                id: val.id,
                etunimi: newEtunimi,
                sukunimi: newSukunimi,
                kutsumanimi: newKutsumanimi,
                syntymavuosi: newSyntymavuosi,
                paino: newPaino,
                laji: newLaji,
                saavutukset: newSaavutukset,
                linkkikuvaan: newLinkkikuvaan,
              }
            : val;
        })
      );
    });
  };

  const poistaUrheilija = (id) => {
    Axios.delete(`http://localhost:3001/poista/${id}`).then((response) => {
      setUrheilijatLista(
        urheilijatLista.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };

  const alkuun = () => {
    window.location.reload();
  };

  const showMuokkaaTextfield_etunimi = () => {
    var x = document.getElementsByClassName("muokkaaInput_etunimi");
    console.log(x);
  };

  return (
    <div className="App">
      <div className="urheilijat">
        <div className="navbar">
          <button onClick={getUrheilijat}>Näytä urheilijat </button>
          <button onClick={alkuun}> Piilota urheilijat </button>
        </div>
        {urheilijatLista.map((val, key) => {
          return (
            <div className="urheilija">
              <h3>
                Etunimi: {val.etunimi}
                <input
                  defaultValue={val.etunimi}
                  className="muokkaaInput"
                  id="muokkaaInput_etunimi"
                  type="text"
                  onChange={(event) => setNewEtunimi(event.target.value)}
                />
              </h3>
              <h3>
                Sukunimi: {val.sukunimi}
                <input
                  defaultValue={val.sukunimi}
                  className="muokkaaInput"
                  id="muokkaaInput_sukunimi"
                  type="text"
                  onChange={(event) => setNewSukunimi(event.target.value)}
                />
              </h3>
              <h3>
                Kutsumanimi: {val.kutsumanimi}
                <input
                  defaultValue={val.kutsumanimi}
                  className="muokkaaInput"
                  id="muokkaaInput_kutsumanimi"
                  type="text"
                  onChange={(event) => setNewKutsumanimi(event.target.value)}
                />
              </h3>
              <h3>
                Syntymävuosi: {val.syntymavuosi}
                <input
                  defaultValue={val.syntymavuosi}
                  className="muokkaaInput"
                  id="muokkaaInput_syntymavuosi"
                  type="text"
                  onChange={(event) => setNewSyntymavuosi(event.target.value)}
                />
              </h3>
              <h3>
                Paino: {val.paino}
                <input
                  defaultValue={val.paino}
                  className="muokkaaInput"
                  id="muokkaaInput_paino"
                  type="text"
                  onChange={(event) => setNewPaino(event.target.value)}
                />
              </h3>
              <h3>
                Laji: {val.laji}
                <input
                  defaultValue={val.laji}
                  className="muokkaaInput"
                  id="muokkaaInput_laji"
                  type="text"
                  onChange={(event) => setNewLaji(event.target.value)}
                />
              </h3>
              <h3>
                Saavutukset: {val.saavutukset}
                <input
                  defaultValue={val.saavutukset}
                  className="muokkaaInput"
                  id="muokkaaInput_saavutukset"
                  type="text"
                  onChange={(event) => setNewSaavutukset(event.target.value)}
                />
              </h3>
              <h3>
                Linkkikuvaan: {val.linkkikuvaan}{" "}
                <input
                  defaultValue={val.linkkikuvaan}
                  className="muokkaaInput"
                  id="muokkaaInput_linkkikuvaan"
                  type="text"
                  onChange={(event) => setNewLinkkikuvaan(event.target.value)}
                />
              </h3>

              <div className="urheilija-nappi-container">
                <button onClick={() => paivitaUrheilijaEtunimi(val.id)}>
                  Päivitä
                </button>
                <button
                  onClick={() => {
                    poistaUrheilija(val.id);
                  }}
                >
                  Poista
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="information">
        <label> Etunimi: </label>
        <input
          type="text"
          onChange={(event) => setEtunimi(event.target.value)}
        />
        <label> Sukunimi: </label>
        <input
          type="text"
          onChange={(event) => setSukunimi(event.target.value)}
        />
        <label> Kutsumanimi: </label>
        <input
          type="text"
          onChange={(event) => setKutsumanimi(event.target.value)}
        />
        <label> Syntymävuosi: </label>
        <input
          type="number"
          onChange={(event) => setSyntymavuosi(event.target.value)}
        />
        <label> Paino: </label>
        <input type="text" onChange={(event) => setPaino(event.target.value)} />
        <label> Laji: </label>
        <input type="text" onChange={(event) => setLaji(event.target.value)} />
        <label> Saavutukset: </label>
        <input
          type="text"
          onChange={(event) => setSaavutukset(event.target.value)}
        />
        <label> Linkki kuvaan: </label>
        <input
          type="text"
          onChange={(event) => setLinkkikuvaan(event.target.value)}
        />
        <button onClick={lisaaUrheilija}> Lisää </button>
      </div>
    </div>
  );
}

export default App;
