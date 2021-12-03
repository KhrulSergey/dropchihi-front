
export interface IPageQuery {
  page?: number //string | number;
  size?: number //string | number;
  sort?: string;
}

interface INftQuery extends IPageQuery{
  collection_name: string;
}

export interface IResourceQuery extends INftQuery{
  asset_id_list?: number;
  asset_count?: number;
}
