import React from 'react'

import "./header.css"

function redirectForAccueil(){
    window.location.href = "/";
}
function redirectForListes(){
    window.location.href = "/listes"
}
function redirectForNotes(){
    window.location.href = "/notes"
}

export const Header = () => {
    return <header>
        <img src="../../../logo.png" alt="logo" onClick={() => redirectForAccueil()}/>
        <ul className="headerUl"> 
            <li><span onClick={() => redirectForListes()}> Liste </span></li>
            <li><span onClick={() => redirectForNotes()}> Note </span></li>
        </ul>
    </header>
}