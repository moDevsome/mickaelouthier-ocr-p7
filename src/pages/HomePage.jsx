/**
 * ------------------------------------------------------------------------
 * HomePage
 *
 * Contain the list of the rentals
 *
 * styles: "/scss/layouts/_home.scss"
 * ------------------------------------------------------------------------
 */

import Thumb from '../assets/thumb-mockup.png';

function HomePage() {

    return(
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
    );

}

export default HomePage;