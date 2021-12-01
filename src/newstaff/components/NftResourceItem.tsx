import {FC} from 'react';
import {INftResource} from '../models/INftResource';

export interface NftResourceParam {
  nftResource: INftResource;
}

export const NftResourceItem: FC<NftResourceParam> = ({
                                                        children,
                                                        nftResource
                                                      }) => (
  <>
    <h2>{nftResource.name}</h2>
    <ul>
      <li>Link: {nftResource.chainImageLink}</li>
      <li>
        MetaData:
        link <a href={nftResource.chainMetadataLink}/>
        assetList size {nftResource.assetList?.length}
      </li>
    </ul>
  </>
);
