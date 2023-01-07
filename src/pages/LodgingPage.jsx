/**
 * ------------------------------------------------------------------------
 * LodgingPage
 *
 * Display the detail of a lodging.
 *
 * route: "/lodging/:id"
 * styles: "/scss/layouts/_lodging.scss"
 * ------------------------------------------------------------------------
 */

import Img from '../assets/lodging-gallery-mockup.png';
import Avatar from '../assets/loadging-host-avatar-empty.png';
import DropdownPanComponent from '../components/utils/DropdownPanComponent';

/** Internal a rate star **/
function LodgingStarComponent() {

    return(
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#FF6060"/>
        </svg>
    );

}

/** Internal component to render gallery picture  **/
function LodgingPictureComponent({ src, alt }) {

    return(
        <div className="lodging-picture">
            <img src={ src } alt={ alt }/>
        </div>
    );

}

/** Internal component to render gallery control  **/
function LodgingControlComponent({ direction = 'left' }) {

    const controlClassName = direction === 'right' ? 'right' : 'left';

    return(
        <div className={ 'lodging-gallery-control lodging-gallery-control_'+ controlClassName }>
            <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
            </svg>
        </div>
    );

}

function LodgingPage() {

    // Mockup
    const panLeftTitle = <h2>Description</h2>
    const panLeftContent = <p>Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). </p>

    const panRightTitle = <h2>Équipements</h2>
    const panRightContent = <ul>
        <li>Climatisation</li>
        <li>Wi-Fi</li>
        <li>Cuisine</li>
        <li>Espace de travail</li>
        <li>Fer à repasser</li>
        <li>Sèche-cheveux</li>
        <li>Cintres</li>
    </ul>

    // Sur les tablettes et smartphones, le dropdown Description est masqué par défaut
    // @see https://www.w3schools.com/jsref/met_win_matchmedia.asp
    // TODO:NE PAS LAISSER CES VALEURS EN DUR ET PASSER PAR LE CONTEXTE !!
    const descriptionDropdownState = window.matchMedia('screen and (min-width: 441px) and (max-width: 780px)').matches || window.matchMedia('screen and (max-width: 440px)').matches ? true : false;

    return(
        <main>
            <div id="Lodging">
                <div id="Lodging-inner">
                    <div id="Lodging-gallery">
                        <div id="Lodging-gallery-controls">
                            <LodgingControlComponent direction="left"/>
                            <LodgingControlComponent direction="right"/>
                        </div>
                        <div id="Lodging-gallery-inner">
                            <LodgingPictureComponent src={ Img } alt={ 'It s a LodgingPictureComponent render !!' } />
                            <LodgingPictureComponent src={ Img } alt={ 'It s a LodgingPictureComponent render !!' } />
                            <LodgingPictureComponent src={ Img } alt={ 'It s a LodgingPictureComponent render !!' } />
                            <LodgingPictureComponent src={ Img } alt={ 'It s a LodgingPictureComponent render !!' } />
                        </div>
                        <div id="Lodging-gallery-pagi">
                            1/4
                        </div>
                    </div>
                    <article id="Lodging-details">
                        <div id="Lodging-details-header">
                            <section id="Lodging-details-header-left">
                                <h1>Cozy loft on the Canal Saint-Martin</h1>
                                <p id="Lodging-location">
                                    Paris, Île-de-France
                                </p>
                                <div id="Lodging-tags-container">
                                    <span>Cozy</span>
                                    <span>Canal</span>
                                    <span>Paris 10</span>
                                </div>
                            </section>
                            <div id="Lodging-details-header-right">
                                <div id="Lodging-host">
                                    <span id="Loadging-host-name">Alexandre Dumas</span>
                                    <span id="Loadging-host-avatar">
                                        <img src={ Avatar } alt="Avatar Alexandre Dumas"/>
                                    </span>
                                </div>
                                <div className="lodging-rates-container lodging-rating-3">
                                    <LodgingStarComponent/>
                                    <LodgingStarComponent/>
                                    <LodgingStarComponent/>
                                    <LodgingStarComponent/>
                                    <LodgingStarComponent/>
                                </div>
                            </div>
                        </div>
                        <div id="Lodging-details-body">
                            <DropdownPanComponent title={ panLeftTitle } content={ panLeftContent } defaultState={ descriptionDropdownState }/>
                            <DropdownPanComponent title={ panRightTitle } content={ panRightContent } customClassName="dropdown-lodging-equipements"/>
                        </div>
                    </article>
                </div>
            </div>
        </main>
    );


}

export default LodgingPage;