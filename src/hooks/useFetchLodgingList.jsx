/**
 * ---------------------------------------------------------------------
 * useFetchLodgingList
 *
 * Permet de récupérer la liste des logements en intéregeant le back-end
 *
 * ---------------------------------------------------------------------
 */

// MOCKUP !!
import mockupJson from '../assets/logements.json';

function useFetchLodgingList() {

    // CETTE FONCTION EST EN MODE "MOCKUP", IL SERA NECESSAIRE DE LA REECRIRE UNE FOIS QUE LE BACK END SERA DISPONIBLE
    return new Promise((resolve, reject) => {

        resolve(mockupJson);

    })

}

export default useFetchLodgingList;