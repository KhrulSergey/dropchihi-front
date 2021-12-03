import {FC} from 'react';
import {INftResource} from '../models/INftResource';
import {Link} from '@reach/router';

interface NftResourceListParams {
  nftResourceList: INftResource[];
}

export const NftResourceList: FC<NftResourceListParams> = ({nftResourceList}) => (
  <ul>
    {nftResourceList.map(resource => (
      <li key={resource.id}>
        <Link to={`/nft/${resource.index}`} >{resource.name}</Link>
      MetaData:
      link <a href={resource.chainMetadataLink}/>
      assetList size {resource.assetList?.length}
      </li>
    ))}
  </ul>
);
