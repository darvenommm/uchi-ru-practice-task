export interface ICommonCat {
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface ICat extends ICommonCat {
  isLiked: boolean;
}

export interface ILikedCat extends ICommonCat {}
