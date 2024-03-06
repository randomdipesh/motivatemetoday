import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
} from '@gluestack-ui/themed';
import {useFavouriteStore, useQuoteActionSheetStore} from '../store/app';
import Toast from 'react-native-toast-message';
import Clipboard from '@react-native-clipboard/clipboard';
import {useCallback, useMemo} from 'react';
export const QuoteActionSheet = () => {
  const {isVisible, closeActionSheet, quote} = useQuoteActionSheetStore();
  const {addFavourite, removeFavourite, isFavourite} = useFavouriteStore();
  const isFav = useMemo(() => isFavourite(quote.id), [quote]);
  const handleFavourite = useCallback(() => {
    if (isFav) {
      removeFavourite(quote.id);
      Toast.show({
        type: 'success',
        text1: 'Removed from Favourites',
        position: 'top',
      });
    } else {
      addFavourite(quote);
      Toast.show({
        type: 'success',
        text1: 'Added to Favourites',
        position: 'top',
      });
    }
    closeActionSheet();
  }, [quote, isFav]);

  const handleCopy = useCallback(() => {
    Clipboard.setString(quote.quote);
    closeActionSheet();
    Toast.show({
      type: 'info',
      text1: 'Copied to Clipboard',
      position: 'top',
    });
  }, [quote.quote]);
  return (
    <Actionsheet useRNModal snapPoints={[20]} isOpen={isVisible} onClose={closeActionSheet} zIndex={999}>
      <ActionsheetBackdrop />
      <ActionsheetContent  zIndex={999}>
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>
        <ActionsheetItem onPress={handleCopy}>
          <ActionsheetItemText>Copy</ActionsheetItemText>
        </ActionsheetItem>
        <ActionsheetItem onPress={handleFavourite}>
          <ActionsheetItemText>
            {isFav ? 'Remove from Favourites' : 'Add to Favourites'}
          </ActionsheetItemText>
        </ActionsheetItem>
      </ActionsheetContent>
    </Actionsheet>
  );
};
