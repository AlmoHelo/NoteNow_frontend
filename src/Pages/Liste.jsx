import React, { useEffect, useState } from 'react'
import {listeService} from "../services/listeService"
import {ListesAll} from "./ListesAll"
// import "./Weather.css"

export const Liste = () => {

    const [liste, setListe] = useState({});

    useEffect((liste) => {
      listeService.trouverToutesLesListes().then(setListe);
    }, []);
    return <div>
        <ListesAll liste={liste !== undefined ? liste : []}></ListesAll>
    </div>
}