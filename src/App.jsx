/**
 * Point d'entrée de l'application
 */

import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';

function App() {

    return(
        <div id="app-body">
            <HeaderComponent/>
            <ErrorPage/>
            <FooterComponent/>
        </div>
    );

}

export default App;