/**
 * Point d'entrée de l'application
 */

import HeaderComponent from './components/blocks/HeaderComponent';
import FooterComponent from './components/blocks/FooterComponent';

import { RoutesList, AppRouter } from './AppRouter';
import { useLocation } from 'react-router-dom';

function App() {

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
            <AppRouter/>
            <FooterComponent/>
        </div>
    );

}

export default App;