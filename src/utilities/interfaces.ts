export interface IPageHero {
  title: string;
}

export interface IArticle {
  imageLocation: string;
  title: string;
  text: string;
}

export interface ICardCompoent {
  id?: number;
  title: string;
  text: string;
  imageLocation: string;
  link: string;
}

export interface IGame {
  id: number;
  title: string;
  description: string;
  type: string;
  imageLocation: string;
  gameLink: string;
  purchaseLink?: string;
}

export interface IMiniature {
  id: number;
  title: string;
  description: string;
  gameLink: string;
  imageLocation: string;
  miniatureLink: string;
  paintingVideoEmbedCode?: string;
}
