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
import { useEffect } from 'react';

function AboutPage() {

    useEffect(() => {

        // On met à jour la balise <title> et la class de la Div englobant l'App
        document.title = 'À propos';
        document.querySelector('div#app-body').className = 'about';

    }, []);

    const fiabilityText = <article>
        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
    </article>

    const respectText = <article>
        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
    </article>

    const serviceText = <article>
        <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
    </article>

    const securityText = <article>
        <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
    </article>

    return(
        <main>
            <div id="About">
                <div id="About-inner">
                    <BannerComponent id={ 'About-banner' }/>
                    <section>
                        <DropdownPanComponent title={ <h2>Fiabilité</h2> } content={ fiabilityText } defaultState={ true }/>
                        <DropdownPanComponent title={ <h2>Respect</h2> } content={ respectText } defaultState={ true }/>
                        <DropdownPanComponent title={ <h2>Service</h2> } content={ serviceText } defaultState={ true }/>
                        <DropdownPanComponent title={ <h2>Responsabilité</h2> } content={ securityText } defaultState={ true }/>
                    </section>
                </div>
            </div>
        </main>
    );


}

export default AboutPage;