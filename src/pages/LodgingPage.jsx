/**
 * -------------------------------------
 * LodgingPage
 *
 * Page de détail du logement
 *
 * route: "/lodging/:id"
 * styles: "/scss/layouts/_lodging.scss"
 * -------------------------------------
 */

import { useParams } from 'react-router-dom';

import Img from '../assets/lodging-gallery-mockup.png';
import Avatar from '../assets/loadging-host-avatar-empty.png';
import DropdownPanComponent from '../components/utils/DropdownPanComponent';
import useFetchLodgingList from '../hooks/useFetchLodgingList.jsx'

import ErrorPage from './ErrorPage';
import { useState, useRef } from 'react';

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

// TODO:retirer la propriété "lodgingList" si le fait d'intéroger le back-end est confirmé
function LodgingPage({ lodgingList }) {

    // L'objet correspondant au logement est vide par défaut, on va récupérer les données du logement au près du back-end
    // puis on met à jour l'état une fois que l'on a trouvé le logement correspondant à l'Id
    const [lodging, updateLodgingID] = useState({});
    const apiPromise = useRef(false); // Passe à TRUE une fois que l'on a reçu la réponse du front-end

    const lodgingId = useParams()['id'] ?? '';
    useFetchLodgingList()
        .then((data) => {

            if(apiPromise.current === false) {

                apiPromise.current = true;

                // On vérifie si l'ID se trouve dans la liste des logements
                const lodgingObject = data.find( lodging => lodging.id === lodgingId );
                updateLodgingID(typeof(lodgingObject) === 'undefined' ? {} : lodgingObject);

            }

        })
        .catch((error) => {

            return <ErrorPage/>

        });


    // Sur les tablettes et smartphones, le dropdown Description est masqué par défaut
    // @see https://www.w3schools.com/jsref/met_win_matchmedia.asp
    const descriptionDropdownState = window.matchMedia('screen and (min-width: 441px) and (max-width: 780px)').matches || window.matchMedia('screen and (max-width: 440px)').matches ? true : false;

    // On vérifie si l'ID se trouve dans la liste des logements
    /*
    const lodgingId = useParams()['id'] ?? '';
    const lodging = lodgingList.find( lodging => lodging.id === lodgingId );


    // Si l'ID n'existe pas, on passe en erreur 404
    if(typeof(lodging) === 'undefined') return <ErrorPage httpCode={ 404 } Message={ 'Oups! La page que vous demandez n\'existe pas.' }/>
    */

    // return <ErrorPage httpCode={ 404 } Message={ 'Oups! La page que vous demandez n\'existe pas.' }/>

    if(apiPromise.current === true) {

        // Si l'objet n'a pas été trouvé, on passe en erreur 404
        if(Object.values(lodging).length === 0) return <ErrorPage httpCode={ 404 } Message={ 'Oups! La page que vous demandez n\'existe pas.' }/>

        // On met à jour la balise <title> et la class de la Div englobant l'App
        document.title = lodging.title;
        document.querySelector('div#app-body').className = 'lodging';

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
                                    <h1>{ lodging.title }</h1>
                                    <p id="Lodging-location">
                                        { lodging.location }
                                    </p>
                                    <div id="Lodging-tags-container">
                                        {
                                            lodging.tags.map( (tag, key) => {

                                                return <span key={ key }>{ tag }</span>

                                            } )
                                        }
                                    </div>
                                </section>
                                <div id="Lodging-details-header-right">
                                    <div id="Lodging-host">
                                        <span id="Loadging-host-name">{ lodging.host.name }</span>
                                        <span id="Loadging-host-avatar">
                                            <img src={ lodging.host.picture } alt={ 'Avatar de '+ lodging.host.name }/>
                                        </span>
                                    </div>
                                    <div className={ 'lodging-rates-container lodging-rating-'+ lodging.rating }>
                                        {
                                            [1, 2, 3, 4, 5].map( iteration => {

                                                return(
                                                    <svg key={ iteration } width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#FF6060"/>
                                                    </svg>
                                                )

                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div id="Lodging-details-body">
                                <DropdownPanComponent title={ <h2>Description</h2> } content={ <p>{ lodging.description }</p> } defaultState={ descriptionDropdownState }/>
                                <DropdownPanComponent title={ <h2>Équipements</h2> } content={
                                    <ul>
                                        {
                                            lodging.equipments.map( (equipment, key) => {

                                                return <li key={ key }>{ equipment }</li>

                                            } )
                                        }
                                    </ul> }
                                    customClassName="dropdown-lodging-equipements"/>
                            </div>
                        </article>
                    </div>
                </div>
            </main>
        );
    }

}

export default LodgingPage;