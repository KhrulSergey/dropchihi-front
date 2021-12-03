import {BaseObject} from './BaseObject';

/** Model Nft asset category */
export class NftCollection extends BaseObject {

  constructor(id: number, name: string, description: string, createdAt: Date, updatedAt: Date) {
    super(id, name, description, createdAt, updatedAt);
  }
}
