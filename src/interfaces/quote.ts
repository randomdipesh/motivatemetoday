
export interface IQuoteProps {
  id: string;
  quote: string;
}

export interface ZustandStorage {
  getItem: (name: string) => string | null | Promise<string | null>
  setItem: (name: string, value: string) => void | Promise<void>
  removeItem: (name: string) => void | Promise<void>
}

export interface IAppDataStore {
  quotes: IQuoteProps[];
  setQuotes: (quotes: IQuoteProps[]) => void;
  createdAt: number;
}

export interface IFavouriteDataStore {
  favourites: IQuoteProps[];
  addFavourite: (favourite: IQuoteProps) => void;
  removeFavourite: (id: string) => void;
  isFavourite: (id: string) => boolean;
}

export interface QuoteActionSheetStore {
  isVisible: boolean;
  quote: IQuoteProps
  openActionSheet: (quote: IQuoteProps) => void;
  closeActionSheet: () => void;
}

export interface IAppThemeStore {
  appTheme: 'light' | 'dark';
  toggleTheme: () => void;
}