/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, Modal, Image, Button, StyleSheet } from 'react-native';

const AccountDetails = props => {
  let modalContent = null;

  if (props.selectedName) {
    modalContent = (
      <View>
        <Image source={props.selectedName.frankImg} />
        <Text>{props.selectedName.name}</Text>
      </View>
    );
  }
  return (
    <Modal
      onRequestClose={props.modalClose}
      visible={props.selectedName !== null}
      animationType="slide">
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <Button title="Delete" color="red" onPress={props.ItemDeleted} />
          <Button title="close" onPress={props.modalClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  }
});

export default AccountDetails;
