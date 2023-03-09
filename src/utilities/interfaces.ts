export interface IPageHero {
  title: string;
}

export interface ICardCompoent {
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
  link: string;
  purchaseLink?: string;
}
