import {BaseObject} from './BaseObject';
import {NftAsset} from './NftAsset';
import {NftMetaplexResourceFileInfo, NftResourceType} from './NftResource';

export interface INftResource extends BaseObject {
  uniqueName: string;
  index: number;
  guid: string;
  relatedCollectionId: number;
  assetList: NftAsset[];
  chainMetadataLink: string;
  chainImageLink: string;
  chainFilesLinkList: NftMetaplexResourceFileInfo[];
  chainActiveStatus: boolean;
  type: NftResourceType;
  countNonDefaultAsset: number;
  rarityCommon: number;
  rarityArtistical: number;
  rarityScoreCommon: number;
  rarityScoreArtistical: number;
  rarityScoreTraitCounting: number;
  rarityScoreTotal: number;
  rankCommon: number;
  rankArtistical: number;
  rankTotal: number;
}
