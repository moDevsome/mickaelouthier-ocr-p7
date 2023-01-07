/**
 * Point d'entrée de l'application
 */

import HeaderComponent from './components/blocks/HeaderComponent';
import FooterComponent from './components/blocks/FooterComponent';
import LodgingPage from './pages/LodgingPage';
import ErrorPage from './pages/ErrorPage';

function App() {

    return(
        <div id="app-body">
            <HeaderComponent/>
            <LodgingPage/>
            <FooterComponent/>
        </div>
    );

}

export default App;