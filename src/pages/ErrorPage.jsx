/**
 * ------------------------------------------------------------------------
 * ErrorPage
 *
 * Display the error page
 *
 * styles: "/scss/layouts/_error.scss"
 * ------------------------------------------------------------------------
 */

import { Link } from "react-router-dom";
import { useEffect } from 'react';

function ErrorPage({ httpCode = 500, Message = 'Aïe, aïe, aïe... notre application a un petit souci..., merci de réessayer un peu plus tard.' }) {

    useEffect(() => {

        document.title = 'Erreur '+ httpCode;
        document.querySelector('div#app-body').className = 'error';

    })

    return(
        <main>
            <div id="Error">
                <div id="Error-inner">
                    <h1>{ httpCode }</h1>
                    <p>{ Message }</p>
                    { <Link title="Retourner sur la page d’accueil" to="/">Retourner sur la page d’accueil</Link> }
                </div>
            </div>
        </main>
    );

}

export default ErrorPage;