import axios from 'axios';
import * as API from '../../api_keys';

export default axios.create({
    baseURL: 'https://api.globalgiving.org/api/public/projectservice'
});
