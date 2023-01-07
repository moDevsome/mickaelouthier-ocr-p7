/**
 * ------------------------------------------------------
 * DropdownPanComponent
 *
 * Affiche une boite qui pourra être repliée ou dépliée
 * au clic sur son en-tête
 *
 * styles: "/scss/components/dropdown-pan.scss"
 *         "/scss/utils/_mixins.scss:dropdown-pan--mixin"
 *         "/scss/utils/_keyframes.scss:dropdown-pan*"
 * ------------------------------------------------------
 */

import { useEffect, useRef, useState } from "react";

function DropdownPanComponent({ title, content, defaultState = false, customClassName = '' }) {

    const [collapseState, setCollapseState] = useState(defaultState); // TRUE => le bloc est replié, FALSE => le bloc est déplié
    const renderAfterChange = useRef(false); // TRUE => si le render fait suite au changement d'état de "collapseState", sinon FALSE

    useEffect( () => {

        /** Déclenché au clic sur le contrôle  */
        renderAfterChange.current = true

    }, [collapseState]);

    let className = '';

    // On replie ou déplie le bloc au moment où le composant se rerender après le clic sur le contrôle
    if(renderAfterChange.current === true) {

        renderAfterChange.current = false;

        if(collapseState === true) {

            className = customClassName.length > 0 ? 'dropdown-pan dropdown-pan__collapsed_anim '+ customClassName : 'dropdown-pan dropdown-pan__collapsed_anim';

        }
        else {

            className = customClassName.length > 0 ? 'dropdown-pan dropdown-pan__expanded_anim '+ customClassName : 'dropdown-pan dropdown-pan__expanded_anim';

        }

    }
    else { // Chargement "classique" de la page, il ne s'agit pas d'un rereder

        if(defaultState === true) {

            className = customClassName.length > 0 ? 'dropdown-pan dropdown-pan__collapsed '+ customClassName : 'dropdown-pan dropdown-pan__collapsed';

        }
        else {

            className = customClassName.length > 0 ? 'dropdown-pan dropdown-pan__expanded '+ customClassName : 'dropdown-pan dropdown-pan__expanded';

        }

    }

    return(
        <div className={ className }>
            <div className="dropdown-pan-header" onClick={ () => setCollapseState(!collapseState) }>
                <div className="dropdown-pan-title">
                    { title }
                </div>
                <div className="dropdown-pan-control">
                    <svg width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.84 16.3466L27.2 13.9733L14 0.786621L0.800025 13.9866L3.16003 16.3466L14 5.50662L24.84 16.3466Z" fill="white"/>
                    </svg>
                </div>
            </div>
            <div className="dropdown-pan-content">
                <div className="dropdown-pan-content-inner">
                    { content }
                </div>
            </div>
        </div>
    );

}

export default DropdownPanComponent;