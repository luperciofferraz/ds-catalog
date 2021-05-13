import axios from 'axios';

export const api = axios.create({

    baseURL: "https://lff-dscatalog.herokuapp.com",        

});