import { httpService } from "./httpService";

class ListeService {

    async trouverToutesLesListes(){
        return httpService.trouverToutesLesListes();
    }
    async trouverUneListe(id){
        return httpService.trouverUneListe(id);
    }

}

export const listeService = Object.freeze(new ListeService());