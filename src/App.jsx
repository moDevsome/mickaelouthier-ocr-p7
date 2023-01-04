/**
 * Point d'entrée de l'application
 */

import Thumb from './assets/thumb-mockup.png';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {

    return(
        <div id="app-body">
            <HeaderComponent/>
            <main>
                <div id="_Section1">
                    <div id="_Section1-inner">
                        <p>Chez vous, partout et ailleurs</p>
                    </div>
                </div>
                <div id="Gallery">
                    <div id="Gallery-inner">
                        <a className="thumb" href="#">
                            <img alt="Titre de la location" src={ Thumb }/>
                            <span>Titre de la location</span>
                        </a>
                        <a className="thumb" href="#">
                            <img alt="Titre de la location" src={ Thumb }/>
                            <span>Titre de la location</span>
                        </a>
                        <a className="thumb" href="#">
                            <img alt="Titre de la location" src={ Thumb }/>
                            <span>Titre de la location</span>
                        </a>
                        <a className="thumb" href="#">
                            <img alt="Titre de la location" src={ Thumb }/>
                            <span>Titre de la location</span>
                        </a>
                        <a className="thumb" href="#">
                            <img alt="Titre de la location" src={ Thumb }/>
                            <span>Titre de la location</span>
                        </a>
                        <a className="thumb" href="#">
                            <img alt="Titre de la location" src={ Thumb }/>
                            <span>Titre de la location</span>
                        </a>
                    </div>
                </div>
            </main>
            <FooterComponent/>
        </div>
    );

}

export default App;