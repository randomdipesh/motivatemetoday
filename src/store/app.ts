import {MMKV} from 'react-native-mmkv';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import type {
  IAppDataStore,
  IAppThemeStore,
  IFavouriteDataStore,
  IQuoteProps,
  QuoteActionSheetStore,
  ZustandStorage,
} from '../interfaces/quote';
const mmkvQuoteStorage = new MMKV({
  id: 'app-quotes-data',
});

const mmkvFavouriteStorage = new MMKV({
  id: 'app-favourites-data',
});

const mmkvThemeStorage = new MMKV({
  id: 'app-theme-data',
});

const getZustandStorage = (mmkv: MMKV): ZustandStorage => ({
  setItem: (key, value) => mmkv.set(key, value),
  getItem: key => mmkv.getString(key) || null,
  removeItem: key => mmkv.delete(key),
});

export const useAppDataStore = create<IAppDataStore>()(
  persist(
    set => ({
      quotes: [],
      setQuotes: quotes => set({quotes, createdAt: Date.now()}),
      createdAt: Date.now(),
    }),
    {
      name: 'app-data',
      storage: createJSONStorage(() => getZustandStorage(mmkvQuoteStorage)),
    },
  ),
);

export const useFavouriteStore = create<IFavouriteDataStore>()(
  persist(
    (set, get) => ({
      favourites: [],
      addFavourite: favourite =>
        set(state => ({favourites: [favourite, ...state.favourites]})),
      removeFavourite: id =>
        set(state => ({
          favourites: state.favourites.filter(item => item.id !== id),
        })),
      isFavourite: id => get().favourites.some(item => item.id === id),
    }),
    {
      name: 'app-fav-data',
      storage: createJSONStorage(() => getZustandStorage(mmkvFavouriteStorage)),
    },
  ),
);

export const useQuoteActionSheetStore = create<QuoteActionSheetStore>(set => ({
  isVisible: false,
  quote: {
    quote: '',
    id: '',
  },
  openActionSheet: quote => set({quote, isVisible: true}),
  closeActionSheet: () => set({isVisible: false}),
}));

export const useAppThemeStore = create<IAppThemeStore>()(
  persist(
    set => ({
      appTheme: 'light',
      toggleTheme: () =>
        set(state => ({
          appTheme: state.appTheme === 'light' ? 'dark' : 'light',
        })),
    }),
    {
      name: 'app-theme',
      storage: createJSONStorage(() => getZustandStorage(mmkvThemeStorage)),
    },
  ),
);
