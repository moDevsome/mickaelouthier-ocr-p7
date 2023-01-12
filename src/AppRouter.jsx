/**
 * -----------------------------------------------------
 * AppRouter
 *
 * Permet de router les différentes URL de l'application
 *
 * -----------------------------------------------------
 */

import { Routes, Route } from 'react-router-dom';

// Importation des différentes pages
import HomePage from './pages/HomePage'; // ==> Page d'accueil de l'application
import LodgingPage from './pages/LodgingPage'; // ==> Page de détail d'un logement
import AboutPage from './pages/AboutPage'; // Page "A propos"
import ErrorPage from './pages/ErrorPage'; // Page d'erreur

function AppRouter() {

    // @see https://blog.webdevsimplified.com/2022-07/react-router/
    return(
        <Routes>
            <Route path="/" element={ <HomePage/> }/>
            <Route path="/lodging/:id" element={ <LodgingPage/> }/>
            <Route path="/about" element={ <AboutPage/> }/>
            <Route path="*" element={ <ErrorPage httpCode={ 404 } Message={ 'Oups! La page que vous demandez n\'existe pas.' }/> }/>
        </Routes>
    );

}

export default AppRouter;