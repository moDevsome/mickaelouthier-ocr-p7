/**
 * Point d'entrée de l'application
 */

import HeaderComponent from './components/blocks/HeaderComponent';
import FooterComponent from './components/blocks/FooterComponent';
import HomePage from './pages/HomePage';
import LodgingPage from './pages/LodgingPage';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';

function App() {

    return(
        <div id="app-body">
            <HeaderComponent/>
            <HomePage/>
            <FooterComponent/>
        </div>
    );

}

export default App;