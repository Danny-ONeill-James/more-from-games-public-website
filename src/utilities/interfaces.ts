export interface ISectionProps {
  children: React.ReactNode;
  title: string;
  text: string;
}

export interface IPageHero {
  title: string;
}

export interface IArticlePage {
  imageLocation: string;
  title: string;
  text: string;
}

export interface IVideo {
  embedCode: string;
  title: string;
  text: string;
}

export interface ICardCompoent {
  id?: number;
  title: string;
  text: string;
  imageLocation: string;
  link: string;
  target: string;
}

export interface IGame {
  id: number;
  title: string;
  description: string;
  type: string;
  imageLocation: string;
  gameLink: string;
  purchaseLink: string;
}

export interface IMiniature {
  id: number;
  title: string;
  description: string;
  gameLink: string;
  imageLocation: string;
  miniatureLink: string;
  paintingVideoEmbedCode: string;
}

export interface IArticles {
  id: number;
  title: string;
  description: string;
  imageLocation: string;
  itemLink: string;
  sections: [
    {
      id: number;
      title: string;
      imageLocation: string;
      body: [
        {
          id: number;
          paragraph: string;
        }
      ];
    }
  ];
}
