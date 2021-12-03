import {useContext} from 'react';
import {ApiServiceContext, ModalServiceContext} from '../contexts';

const useApi = () => {
  const apiService = useContext(ApiServiceContext);
  const modalService = useContext(ModalServiceContext);
  return {
    apiService,
    modalService,
  };
};

export default useApi;
