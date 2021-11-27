import React from 'react'
// import { faCross, faCrosshairs, faHome, faMinus, faSkullCrossbones, faTimes } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './NewListe.css'

export const NewListe = () => {
    const [titre, setTitre] = React.useState("");
    const [liste, setListe] = React.useState("");

    const handleSubmit = (event) => {
        console.log(`
      titre: ${titre}
        Liste: ${liste}
      `);

        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} className="formNewList">
            <h1>Créer votre nouvelle note</h1>
            <div className="inputsNewList">
                <label>
                    Titre*:
                    <input
                        name="titre"
                        type="text"
                        value={titre}
                        onChange={e => setTitre(e.target.value)}
                        required />
                </label>

                <label>
                    Liste:
                    <textarea
                        name="liste"
                        value={liste}
                        onChange={e => setListe(e.target.value)}
                        required />
                </label>

                <button>Submit</button>
            </div>
        </form>
    );
}