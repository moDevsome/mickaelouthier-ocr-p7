/**
 * --------------------------------------------------------------------------
 * LodgingGalleryComponent
 *
 * Affiche un diaporama contenant les images de la page détaillée du logement
 *
 * styles: "/scss/components/_lodging-gallery.scss"
 * --------------------------------------------------------------------------
 */

import { useEffect, useState, useRef } from "react";

/**
 *
 * @param lodgingPictures array Liste des photos du logement
 * @param lodgingTitle string Libellé du logement utilisé pour l'attribut Alt des photos
 * @returns Jsx
 */
function LodgingGalleryComponent({ lodgingPictures, lodgingTitle }) {

    const [currentPicture, updateCurrentPicture] = useState(1);
    const backWard = useRef(false); // passe à FALSE lorsque l'on va sur la gauche en étant en butté
    const forWard = useRef(false); // passe à FALSE lorsque l'on va sur la droite en étant en butté
    const resetPosition = useRef(false); // vaut TRUE lorsque l'on remet le diapo en bonne position, il ne doit pas y avoir d'animation sur la margin
    let displayTempPicture = false;

    const transitionTiming = {int: 650, str: '650ms'};

    useEffect(() => {

        resetPosition.current = currentPicture === 999;

    }, [currentPicture, lodgingPictures.length]);

    let currentPictureNumber = currentPicture;

    if(currentPicture === 997) { // La currentPicture === 997 quand se repositionne suite à un backWard

        currentPictureNumber = lodgingPictures.length - 2;

    }

    // Style par défaut
    let innnerStyle = {
        width: (100 * lodgingPictures.length).toString() +'%',
        marginLeft: ((0 - (currentPictureNumber - 1)) * 100).toString() +'%',
        transition: resetPosition.current === true ? 'margin-left 0ms' : 'margin-left '+ transitionTiming.str
    }

    if(forWard.current === true) { // On repart vers la 1ere photo à partir de la dernière

        // Style à appliquer en cas de dépassement
        // On ajoute 100% à la largeur pour laisser de la place à la forward-picture
        innnerStyle = {
            width: ((100 * lodgingPictures.length) + 100).toString() +'%',
            marginLeft: (0 - (lodgingPictures.length * 100)).toString() +'%',
            transition: 'margin-left '+ transitionTiming.str
        }

        // On attend 650ms et on rerender le composant pour se repositionner au bon endroit
        setTimeout(() => {

            forWard.current = false;
            resetPosition.current = true;
            updateCurrentPicture(1);

        }, transitionTiming.int);

        // Photo supplmentaire qui va remplacer temporairement la "vrais" photo 1 le temps de la transition, avant de repositionner le slider
        displayTempPicture = true;
        currentPictureNumber = 1;

    }

    if(backWard.current === true) { // Retour vers l'arrière à partir de la 1ere photo

        if(currentPicture === 997) {

            // 2eme étape de l'animation
            innnerStyle = {
                width: ((100 * lodgingPictures.length) + 100).toString() +'%',
                marginLeft:  (0 - ((100 * lodgingPictures.length) - 100)).toString() + '%',
                transition: 'margin-left '+ transitionTiming.str
            }

            // Photo supplémentaire qui va remplacer temporairement la "vrais" photo 1 le temps de la transition, avant de repositionner le slider
            displayTempPicture = true;
            currentPictureNumber = lodgingPictures.length;

            setTimeout(() => {

                // 3eme étape de l'animation
                backWard.current = false;
                resetPosition.current = true;
                updateCurrentPicture(lodgingPictures.length);

            }, transitionTiming.int);

        }
        else { // 1ere étape de l'animation

            // Style à appliquer en cas de retour vers l'arrière
            // On remplace la photo 1 par la photo supplémentaire
            innnerStyle = {
                width: ((100 * lodgingPictures.length) + 100).toString() +'%',
                marginLeft:  (0 - (100 * lodgingPictures.length)).toString() +'%',
                transition: 'margin-left 0ms'
            }

            // On attend 50ms et on rerender le composant pour se repositionner au bon endroit
            setTimeout(() => {

                updateCurrentPicture(997);

            }, 50);

            // Photo supplmentaire qui va remplacer temporairement la "vrais" photo 1 le temps de la transition, avant de repositionner le slider
            displayTempPicture = true;
            currentPictureNumber = 1;

        }

    }

    return(
        <div id="Lodging-gallery" data-pictures-count={ lodgingPictures.length }>
            <div id="Lodging-gallery-controls">
                {
                    ['left', 'right'].map((direction) => {

                        return(
                            <button key={ direction } className={ 'lodging-gallery-control lodging-gallery-control_'+ direction } onClick={ () => {

                                if(backWard.current === false && forWard.current === false) {

                                    if(direction === 'left') { // On recule vers la gauche

                                        if(currentPicture === 1) {

                                            backWard.current = true;
                                            updateCurrentPicture( 0 );

                                        }
                                        else {

                                            backWard.current = false;
                                            updateCurrentPicture( currentPicture - 1 );

                                        }

                                    }
                                    else { // On avance vers la droite

                                        if(currentPicture === lodgingPictures.length) {

                                            forWard.current = true;
                                            updateCurrentPicture( 999 );

                                        }
                                        else {

                                            forWard.current = false;
                                            updateCurrentPicture( currentPicture === lodgingPictures.length ? 1 : currentPicture + 1 );

                                        }

                                    }

                                }

                            } }>
                                <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
                                </svg>
                            </button>
                        )

                    })
                }
            </div>
            <div id="Lodging-gallery-inner" style={
                innnerStyle
            }>
                {
                    lodgingPictures.map((src, key) => {

                        return(
                            <div key={ key } className="lodging-picture">
                                <img src={ src } alt={ lodgingTitle + ' - Photo '+ (key + 1).toString()  }/>
                            </div>
                        );

                    })
                }
                { displayTempPicture && <div id="lodging-picture-temp-animate" className="lodging-picture"><img src={ lodgingPictures[ 0 ] } alt={ lodgingTitle + ' - Photo '+ (lodgingPictures.length + 1).toString()  }/></div> }
            </div>
            <div id="Lodging-gallery-pagi">
                { currentPictureNumber +'/'+ lodgingPictures.length }
            </div>
        </div>
    )

}

export default LodgingGalleryComponent;