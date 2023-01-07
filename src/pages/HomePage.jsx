/**
 * ------------------------------------------------------------------------
 * HomePage
 *
 * Contain the list of the rentals
 *
 * styles: "/scss/layouts/_home.scss"
 * ------------------------------------------------------------------------
 */

import BannerComponent from '../components/utils/BannerComponent';
import Thumb from '../assets/thumb-mockup.png';

function HomePage() {

    return(
        <main>
            <BannerComponent id={ '_Section1' } content={ <p>Chez vous, partout et ailleurs</p> }/>
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