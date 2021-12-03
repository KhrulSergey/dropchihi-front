import {BaseObject} from './BaseObject';
import {NftAsset} from './NftAsset';

/** Model Nft resource (image) */
export class NftResource extends BaseObject {
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

  constructor(id: number, name: string, description: string, createdAt: Date, updatedAt: Date,
              uniqueName: string, index: number, guid: string, relatedCollectionId: number, assetList: NftAsset[],
              chainMetadataLink: string, chainImageLink: string, chainFilesLinkList: NftMetaplexResourceFileInfo[],
              chainActiveStatus: boolean, type: NftResourceType, countNonDefaultAsset: number, rarityCommon: number,
              rarityArtistical: number, rarityScoreCommon: number, rarityScoreArtistical: number, rarityScoreTraitCounting: number,
              rarityScoreTotal: number,  rankCommon: number,  rankArtistical: number,  rankTotal: number) {
    super(id, name, description, createdAt, updatedAt);
    this.uniqueName = uniqueName;
    this.index = index;
    this.guid = guid;
    this.relatedCollectionId = relatedCollectionId;
    this.assetList = assetList;
    this.chainMetadataLink = chainMetadataLink;
    this.chainImageLink = chainImageLink;
    this.chainFilesLinkList = chainFilesLinkList;
    this.chainActiveStatus = chainActiveStatus;
    this.type = type;
    this.countNonDefaultAsset = countNonDefaultAsset;
    this.rarityCommon = rarityCommon;
    this.rarityArtistical = rarityArtistical;
    this.rarityScoreCommon = rarityScoreCommon;
    this.rarityScoreArtistical = rarityScoreArtistical;
    this.rarityScoreTraitCounting = rarityScoreTraitCounting;
    this.rarityScoreTotal = rarityScoreTotal;
    this.rankCommon = rankCommon;
    this.rankArtistical = rankArtistical;
    this.rankTotal = rankTotal;
  }
}

export enum NftResourceType {
  PNG = 'png',
  JPG = 'jpg',
}

interface NftMetaplexResourceFileInfo {
  resourceFileUri: string;
  resourceType: NftResourceType;
}

export type { NftMetaplexResourceFileInfo };
