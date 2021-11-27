import React,{ Redirect } from 'react'
import { faCross, faCrosshairs, faHome, faMinus, faSkullCrossbones, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./listesAll.css"

function redirectForDetails(id) {
    window.location.href = `/listes/${id}/details`
}
function redirectForCreateList() {
    window.location.href = `/listes/creer`
}

function renderListe(listes) {
    const arrayListe = listes;
    console.log(arrayListe);
    if (arrayListe.length > 0) {
        return (
            <ul className="listesUl">
                {arrayListe.map((value, index) => {
                    return <span onClick={() => redirectForDetails(value.id)}> <li key={index}> <span><FontAwesomeIcon icon={faMinus} className="faMinus" />{value.titre}</span>  <FontAwesomeIcon icon={faTimes} /> </li></span>
                })}
            </ul>
        )
    } else {
        return (
            <p>Vous n'avez aucunes listes pour le moment</p>
        )
    }
}

export const ListesAll = (props) => {
    const listes = renderListe(props.liste)
    return <div className="divListes">
        <button onClick={() => redirectForCreateList()}>Créer une nouvelle liste</button>
        {listes}
    </div>
}