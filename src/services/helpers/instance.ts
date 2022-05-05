import axios from 'axios';
import Config from 'react-native-config';
import {errorHandler} from '../interceptors/error';
import {requestHandler} from '../interceptors/request';
import {responseHandler} from '../interceptors/response';
const instance = axios.create({
  baseURL: Config.API_URL,
});

instance.defaults.timeout = 2500;

instance.interceptors.request.use(requestHandler, errorHandler);
instance.interceptors.response.use(responseHandler, errorHandler);

export default instance;
