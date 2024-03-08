export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  isFavorite: boolean;
}

export interface ApiContextType {
  characterList: Character[];
  favoritesList: Character[];
  getCharacterList: () => void;
  setCharacterList: React.Dispatch<React.SetStateAction<Character[]>>;
  searchCharacters: (query: string) => void;
  favoriteCount: number;
  setFavoriteCount: React.Dispatch<React.SetStateAction<number>>;
  toggleFavorite: (characterId: number) => void;
  selectedCharacterId: number | null;
  selectCharacter: (id: number) => void;
  comicList: Comic[];
}

export type Images = {
  path: string;
  extension: string;
};

export type Comic = {
  comic: unknown;
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: [];
  resourceURI: string;
  urls: [];
  series: object;
  variants: [];
  collections: [];
  collectedIssues: [];
  dates: [];
  thumbnail: {
    path: string;
    extension: string;
  };
  images: Images[];
  creators: {
    available: number;
    collectionURI: string;
    items: [];
    returned: number;
  };
  characters: {
    available: number;
    collectionURI: string;
    items: [];
    returned: number;
  };
  stories: {
    available: number;
    collectionURI: string;
    items: [];
    returned: number;
  };
  events: {
    available: number;
    collectionURI: string;
    items: [];
    returned: number;
  };
  price: number;
  oldPrice: number;
  stock: number;
};

export type CharacterDataWrapper = {
  results: Character[];
};
