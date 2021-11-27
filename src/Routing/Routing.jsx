import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Accueil } from "../Pages/Accueil";
import { Liste } from '../Pages/Liste';
import { NewListe } from '../Pages/NewListe';

export const Routing = () => {

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Accueil />}/>
                <Route exact path="/listes" element={<Liste />}/>
                {/* <Route exact path="/listes/:id/details" element={<ListeOne />}/> */}
                <Route exact path="/listes/creer" element={<NewListe />}/>
            </Routes>
        </Router>
    )
}