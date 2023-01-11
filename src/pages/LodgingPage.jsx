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

import { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

import ErrorPage from './ErrorPage';

import DropdownPanComponent from '../components/utils/DropdownPanComponent';
import LodgingGalleryComponent from '../components/blocks/LodgingGalleryComponent';
import useFetchLodgingList from '../hooks/useFetchLodgingList.jsx'

function LodgingPage() {

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
                        <LodgingGalleryComponent lodgingPictures={ lodging.pictures } lodgingTitle={ lodging.title }/>
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
                                <DropdownPanComponent title={ <h2>Description</h2> } content={ <p>{ lodging.description }</p> } defaultState={ true }/>
                                <DropdownPanComponent title={ <h2>Équipements</h2> } content={
                                    <ul>
                                        {
                                            lodging.equipments.map( (equipment, key) => {

                                                return <li key={ key }>{ equipment }</li>

                                            } )
                                        }
                                    </ul> }
                                     defaultState={ true }
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