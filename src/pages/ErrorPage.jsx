/**
 * ------------------------------------------------------------------------
 * ErrorPage
 *
 * Display the error page
 *
 * styles: "/scss/layouts/_error.scss"
 * ------------------------------------------------------------------------
 */

function ErrorPage({ httpCode = 500, Message = 'Aïe, aïe, aïe... notre application a un petit souci..., merci de réessayer un peu plus tard.' }) {

    //TODO:remplacer par un composant Link/>
    const backToHome = httpCode !== 500 ? <a href="#">Retourner sur la page d’accueil</a> : '';

    return(
        <main>
            <div id="Error">
                <div id="Error-inner">
                    <h1>{ httpCode }</h1>
                    <p>{ Message }</p>
                    { backToHome }
                </div>
            </div>
        </main>
    );

}

export default ErrorPage;