/**
 * --------------------------------------------------------------------------------------------------------------------------------------
 * BannerComponent
 *
 * Affiche une image au format paysage
 *
 * @param id string => L'ID du bloc .banner
 * @param backgroundImageSrc string => L'image de fond (ne sera pas utilisé si une chaine vide est passée)
 * @param content string => Chaine JSX à afficher au 1er plan (ne sera pas utilisé si une chaine vide est passée)
 * @param content string => Chaine JSX à afficher au 1er plan (ne sera pas utilisé si une chaine vide est passée)
 * @param customClassName string => Chaine à concatainer avec la class de base du bloc (ne sera pas utilisé si une chaine vide est passée)
 *
 * styles: "/scss/components/_banner.scss
 * ---------------------------------------------------------------------------------------------------------------------------------------
 */

function BannerComponent({ id, backgroundImageSrc = '', content = '', customClassName = '' }) {

    const styles = backgroundImageSrc.length > 0 ? { backgroundImage: 'url('+ backgroundImageSrc +')' } : {};

    return(
        <div id={ id } className={ customClassName.length > 0 ? 'banner '+ customClassName : 'banner' } style={ styles }>
            <div className="banner-inner">
                { content }
            </div>
        </div>
    );

}

export default BannerComponent;