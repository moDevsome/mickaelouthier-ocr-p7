/**
 * Point d'entrée de l'application
 */

import HeaderComponent from './components/blocks/HeaderComponent';
import FooterComponent from './components/blocks/FooterComponent';

import AppRouter from './AppRouter';

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