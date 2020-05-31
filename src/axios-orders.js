import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-8a30d.firebaseio.com/'
});

export default instance;