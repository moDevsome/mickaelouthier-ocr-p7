/**
 * Point d'entrée de l'application
 */

import AppRouter from './AppRouter';

import HeaderComponent from './components/blocks/HeaderComponent';
import FooterComponent from './components/blocks/FooterComponent';

function App() {

    return(
        <div id="app-body">
            <HeaderComponent/>
            <AppRouter/>
            <FooterComponent/>
        </div>
    );

}

export default App;