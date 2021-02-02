import axios from "axios";

const req=axios.create({baseURL: 'https://api.themoviedb.org/3'});

export default req;