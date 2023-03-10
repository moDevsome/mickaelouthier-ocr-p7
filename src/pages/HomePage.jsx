/**
 * ------------------------------------------------------------------------
 * HomePage
 *
 * Contain the list of the rentals
 *
 * styles: "/scss/layouts/_home.scss"
 * ------------------------------------------------------------------------
 */

import { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";

import BannerComponent from '../components/utils/BannerComponent';
import useFetchLodgingList from '../hooks/useFetchLodgingList.jsx'
import ErrorPage from './ErrorPage';

function HomePage() {

    // Etat contenant la liste des logements
    const [lodgingList, updateLodgingList] = useState([]);

    useEffect(() => {

            // On met à jour la balise <title> et la class de la Div englobant l'App
            document.title = 'Bienvenue chez Kaza !';
            document.querySelector('div#app-body').className = 'home';

    }, []);

    /** Récupère la liste des logement via la fonction "useFetchLodgingList" */
    const apiPromise = useRef(false); // Passe à TRUE une fois que l'on a reçu la réponse du front-end
    useFetchLodgingList()
        .then((data) => {

            if(apiPromise.current === false) {

                apiPromise.current = true;
                updateLodgingList(data);

            }

        })
        .catch((error) => {

            return <ErrorPage/>

        });


    if(lodgingList.length === 0) { // On a eu une réponse de l'API mais elle est vide

        return(
            <main>
                <BannerComponent id={ '_Section1' } content={ <p>Chez vous, partout et ailleurs</p> }/>
                <div id="Gallery">
                    <div id="Gallery-inner">
                        <p id="no-results">Nous n'avons aucun logement disponible pour le moment.</p>
                    </div>
                </div>
            </main>
        );

    }
    else { // On affiche la liste des biens

        return(
            <main>
                <BannerComponent id={ '_Section1' } content={ <p>Chez vous, partout et ailleurs</p> }/>
                <div id="Gallery">
                    <div id="Gallery-inner">
                    {
                        lodgingList.map( (lodging, key) => {
                            return(
                                <Link key={ key +'-'+lodging.id } className="thumb" to={ '/lodging/'+ lodging.id }>
                                    <img alt={ 'Location '+ lodging.title } src={ lodging.cover }/>
                                    <span>{ lodging.title }</span>
                                </Link>
                            )
                        })
                    }
                    </div>
                </div>
            </main>
        );

    }

}

export default HomePage;