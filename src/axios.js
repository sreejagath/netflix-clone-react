import axios from 'axios'
import {baseUrl} from './Costants/constants'

const instance = axios.create({
    baseURL: baseUrl
  });

  export default instance