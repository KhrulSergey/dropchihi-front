import {createContext} from 'react';
import ModalService from '../service/ModalService';

const defaultService = new ModalService();
const ModalServiceContext = createContext(defaultService);

export default ModalServiceContext;
