/**
 * Point d'entrée de l'application
 */

import AppRouter from './AppRouter';
import { useState } from 'react';

import HeaderComponent from './components/blocks/HeaderComponent';
import FooterComponent from './components/blocks/FooterComponent';

function App() {


    // Etat contenant la liste des logements, l'état est mis à jour à chaque appel de la page d'accueil
    const [lodgingList, updateLodgingList] = useState([]);

    return(
        <div id="app-body">
            <HeaderComponent/>
            <AppRouter lodgingList={ lodgingList } updateLodgingList={ updateLodgingList }/>
            <FooterComponent/>
        </div>
    );

}

export default App;