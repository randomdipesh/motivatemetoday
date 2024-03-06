import {Box, Pressable, Text} from '@gluestack-ui/themed';
import {useQuoteActionSheetStore} from '../store/app';
import type {IQuoteProps} from '../interfaces/quote';
import {memo} from 'react';

export const Quote = memo(({quote, id}: IQuoteProps) => {
  const {openActionSheet} = useQuoteActionSheetStore();
  return (
    <Pressable
      onPress={() => openActionSheet({quote, id})}
      my={5}
      backgroundColor={"$coolGray300"}
      p={15}
      borderRadius={10}>
      <Text
        fontSize={18}
        fontWeight={'$bold'}
        color="$coolGray800"
        textAlign="center">
        {quote}
      </Text>
    </Pressable>
  );
});
