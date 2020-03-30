import axios from 'axios';

const feedciti = axios.create({
    baseURL: 'https://feedciti.com'
});

/*feedciti.interceptors.request.use((request) => {
    console.log(`REQUEST: ${JSON.stringify(request)}`);
    return request;
});*/

export default feedciti;
