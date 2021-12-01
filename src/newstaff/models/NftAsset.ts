import {BaseObject} from './BaseObject';


/** Model Nft asset (trait) */
export class NftAsset extends BaseObject {
  categoryId: string;
  assetUrl: string;
  color: string;
  skinType: string;
  skinColor: string;

  rarityCommon: number;
  rarityArtistical: number;
  rarityScoreCommon: number;
  rarityScoreArtistical: number;
  rarityScoreTotal: number;

  constructor(id: number, name: string, description: string, createdAt: Date, updatedAt: Date,
              categoryId: string, assetUrl: string, color: string, skinType: string, skinColor: string,
               rarityCommon: number, rarityArtistical: number, rarityScoreCommon: number,
              rarityScoreArtistical: number, rarityScoreTotal: number) {
    super(id, name, description, createdAt, updatedAt);
    this.categoryId = categoryId;
    this.assetUrl = assetUrl;
    this.color = color;
    this.skinType = skinType;
    this.skinColor = skinColor;
    this.rarityCommon = rarityCommon;
    this.rarityArtistical = rarityArtistical;
    this.rarityScoreCommon = rarityScoreCommon;
    this.rarityScoreArtistical = rarityScoreArtistical;
    this.rarityScoreTotal = rarityScoreTotal;
  }
}

//todo delete!
// /** Модуль-enum со списком типов "Центр Электронного Декларирования" */
// export enum CedType {
//   /** Обычный */
//   DEFAULT = 'Default',
//   /** Авиационный */
//   AVIATION = 'Aviation',
//   /** Морской */
//   MARINE = 'Marine',
//   /** Энергетический */
//   ENERGETIC = 'Energetic',
//   /** Акцизный */
//   EXCISE = 'Excise',
// }
//
// /** Прототип для хранения параметров показа иконок ЦЭД */
// interface CedTypeIconProps {
//   cedType: CedType;
//   texturePath: string;
//   label: string;
// }
//
// /** Возвращает набор параметров показа иконок ЦЭД */
// export const cedTypeIconDetails: CedTypeIconProps[] = [
//   {
//     cedType: CedType.DEFAULT,
//     texturePath: '',
//     label: ''
//   },
//   {
//     cedType: CedType.AVIATION,
//     texturePath: '/resources/cedTypedIcons/plane.png',
//     label: 'Авиационный'
//   },
//   {
//     cedType: CedType.MARINE,
//     texturePath: '/resources/cedTypedIcons/ship.png',
//     label: 'Морской'
//   },
//   {
//     cedType: CedType.EXCISE,
//     texturePath: '/resources/cedTypedIcons/diamond.png',
//     label: 'Акцизный'
//   },
//   {
//     cedType: CedType.ENERGETIC,
//     texturePath: '/resources/cedTypedIcons/bolt.png',
//     label: 'Энергетический'
//   }
// ];
