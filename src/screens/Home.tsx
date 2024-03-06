import {useCallback, useEffect} from 'react';
import {QuoteListPage} from '../components/QuoteListPage';
import {getQuotes} from '../services/quote';
import {useAppDataStore} from '../store/app';

export const Home = () => {
  const {setQuotes, quotes, createdAt} = useAppDataStore();
  const pullData = useCallback(async () => {
    const data = await getQuotes();
    const quotes = data.map((quote: any, index: number) => {
      return {
        id: `${Date.now()}_${index}`,
        quote: quote.q,
      };
    });
    setQuotes(quotes);
  }, []);

  useEffect(() => {
    if (quotes.length < 1 || Date.now() - createdAt > 1000 * 60 * 60 * 6) {
      pullData();
      return;
    }
  }, [pullData, quotes, createdAt]);
  return (
    <>
      <QuoteListPage title="Top Quotes" onRefresh={pullData} quotes={quotes} />
    </>
  );
};
