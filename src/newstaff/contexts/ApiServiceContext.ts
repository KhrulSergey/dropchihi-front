import { createContext } from 'react';
import ApiService from '../service/ApiService';

const defaultService = new ApiService();
const ApiServiceContext = createContext(defaultService);

export default ApiServiceContext;
