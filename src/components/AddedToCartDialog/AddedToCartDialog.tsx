import React, {FC} from 'react';
import {Button, Dialog, Portal, Text} from 'react-native-paper';

interface IAddedToCartDialogProps {
  visible: boolean;
  hideDialog: () => void;
}

const AddedToCartDialog: FC<IAddedToCartDialogProps> = ({
  visible,
  hideDialog,
}) => {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Added</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">
            Product has successfully added to the cart!
          </Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Done</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default AddedToCartDialog;
