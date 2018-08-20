import React from 'react';
import { Modal, View, Text, Image, Button, StyleSheet } from 'react-native';

const PlaceDetail = (props) => {
  let modalContent = null;

  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image 
          resizeMode="contain"
          style={styles.placeImage}
          source={props.selectedPlace.image}/>
        <Text>{props.selectedPlace.value}</Text>
      </View>
    );
  }
  return (
    <Modal 
      visible={props.selectedPlace !== null}
      animationType="slide" 
      onRequestClose={props.onModalClosed} >
      <View style={styles.modalContainer} >
        {modalContent}
        <View>
          <Button 
            title="Delete" 
            color="red"
            onPress={props.onItemDeleted} />
          <Button 
            title="Close"
            onPress={props.onModalClosed} />
        </View>
      </View>
    </Modal>);
};

const styles = StyleSheet.create({
  modalContainer: {
    width: "100%",
    margin: 22
  },
  placeImage: {
    width: "100%",
    height: 200
  }
});

export default PlaceDetail;