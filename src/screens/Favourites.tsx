import {QuoteListPage} from '../components/QuoteListPage';
import {useFavouriteStore} from '../store/app';
export const Favourites = () => {
  const {favourites} = useFavouriteStore();
  return (
    <>
      <QuoteListPage title="Favourite Quotes" quotes={favourites} />
    </>
  );
};
