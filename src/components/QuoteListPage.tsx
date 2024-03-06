import {Box, Text} from '@gluestack-ui/themed';
import {IQuoteProps} from '../interfaces/quote';
import {FlashList} from '@shopify/flash-list';
import {Quote} from './Quote';
import {memo} from 'react';

interface IQuoteListPageProps {
  title: string;
  quotes: IQuoteProps[];
  onRefresh?: () => void;
}
const EmptyQuotePage = memo(() => {
  return <Text textAlign="center">No data found</Text>;
});
export const QuoteListPage = ({
  title,
  quotes,
  onRefresh,
}: IQuoteListPageProps) => {
  return (
    <>
      <Text my={10} fontWeight="bold" mb={15} fontSize={18} textAlign="center">
        {title}
      </Text>
      <FlashList
        data={quotes}
        onRefresh={onRefresh}
        refreshing={false}
        keyExtractor={item => item.id}
        estimatedItemSize={200}
        ListEmptyComponent={EmptyQuotePage}
        contentContainerStyle={{
          paddingHorizontal: 10,
        }}
        renderItem={({item}: {item: any}) => (
          <Quote quote={item.quote} id={item.id} />
        )}
      />
    </>
  );
};
