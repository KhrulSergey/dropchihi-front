/**
 * This class is responsible to handle backend usage
 */
import {INftCollection} from '../models/INftCollection';
import {IPage, IResourceQuery} from '../models/common';
import {INftResource} from '../models/INftResource';
import HttpUtils from './utils/HttpUtils'
import ModalService from './ModalService';


class ApiService {
  /**
   * Base path to the backend api for LeagueID service
   */
  public backendPath: string = process.env.REACT_APP_BACKEND_PATH!;

  /**
   * Default HTTP errors handler
   */
  public errorHandler = (modalService: ModalService) => (e: Error) => {
    console.error(e);
    modalService.showError(e.message);
  };

  /**
   * Get collection info
   */
  public getNftCollection = (
    collectionId: number | string
  ): Promise<INftCollection> => {
    const headers = HttpUtils.getHeaders();

    const url = `${this.backendPath}/api/collection/?collection_name=${collectionId}`;
    console.log("url ", url);
    return HttpUtils.sendGetRequest(
      url,
      headers
    )
      .then((response) => response.json())
      .then((response) => HttpUtils.validateResponse<INftCollection>(response));
  };

  /**
   * Get nft resource list by collection
   */
  public getNftResourceList = (
    collectionId: string | number
  ): Promise<IPage<INftResource[]>> => {
    const headers = HttpUtils.getHeaders();
    return HttpUtils.sendGetRequest(
      `${this.backendPath}/api/collection/resources/?collection_name=${collectionId}`,
      headers
    )
      .then((response) => response.json())
      .then((response) => HttpUtils.validateResponse<IPage<INftResource[]>>(response));
  };

  /**
   * Get nft resource list by collection
   */
  public getPageableNftResourceList = (
    queryObj: IResourceQuery
  ): Promise<IPage<INftResource[]>> => {
    const query = HttpUtils.getQueryFromObject(queryObj);
    const headers = HttpUtils.getHeaders();
    return HttpUtils.sendGetRequest(
      `${this.backendPath}/api/collection/resources/${query}`,
      headers
    )
      .then((response) => response.json())
      .then((response) => HttpUtils.validateResponse<IPage<INftResource[]>>(response));
  };
}

export default ApiService;
