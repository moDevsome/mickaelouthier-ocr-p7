/**
 * -------------------------------------
 * AboutPage
 *
 * Page "A propos" de l'application Kasa
 *
 * route: "/about"
 * styles: "/scss/layouts/_about.scss"
 * -------------------------------------
 */

import BannerComponent from '../components/utils/BannerComponent';
import DropdownPanComponent from '../components/utils/DropdownPanComponent';

function AboutPage() {

    const loremText = <article>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </article>

    const respectText = <article>
        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
    </article>

    return(
        <main>
            <div id="About">
                <div id="About-inner">
                    <BannerComponent id={ 'About-banner' }/>
                    <section>
                        <DropdownPanComponent title={ <h2>Fiabilité</h2> } content={ loremText } defaultState={ true }/>
                        <DropdownPanComponent title={ <h2>Respect</h2> } content={ respectText }/>
                        <DropdownPanComponent title={ <h2>Service</h2> } content={ loremText } defaultState={ true }/>
                        <DropdownPanComponent title={ <h2>Responsabilité</h2> } content={ loremText } defaultState={ true }/>
                    </section>
                </div>
            </div>
        </main>
    );


}

export default AboutPage;