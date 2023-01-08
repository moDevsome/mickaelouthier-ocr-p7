/**
 * Point d'entrée de l'application
 */

import { RoutesList, AppRouter } from './AppRouter';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

import HeaderComponent from './components/blocks/HeaderComponent';
import FooterComponent from './components/blocks/FooterComponent';

function App() {


    // Etat contenant la liste des logements, l'état est mis à jour à chaque appel de la page d'accueil
    const [lodgingList, updateLodgingList] = useState([]);

    // On définis la class CSS à appliquer à l'écran courant
    let appClass = 'home';
    for( const segment of useLocation().pathname.split('/') ) {

        if(segment.length > 0) {

            if( !RoutesList.includes(segment) ) {

                appClass = 'error';
                break;

            }
            else {

                appClass = segment;
                break;

            }

        }

    }

    return(
        <div id="app-body" className={ appClass }>
            <HeaderComponent/>
            <AppRouter lodgingList={ lodgingList } updateLodgingList={ updateLodgingList }/>
            <FooterComponent/>
        </div>
    );

}

export default App;