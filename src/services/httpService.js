class HttpService {
    
    baseurl = "http://localhost:8080";
    headers= {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    async trouverToutesLesListes(){
        return fetch(`${this.baseurl}/listes`)
        .then(res=>res.json())
        .catch(err => console.error(err))
    }
    async trouverUneListe(id){
        return fetch(`${this.baseurl}/listes/${id}`)
        .then(res=>res.json())
        .catch(err => console.error(err))
    }

}

export const httpService = Object.freeze(new HttpService());


