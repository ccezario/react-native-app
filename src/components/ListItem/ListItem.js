import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ListItem = (props) => (
  <TouchableOpacity onPress={props.onItemPress}>
  <View style={styles.listItem} >
    <Image 
      resizeMode="contain"
      style={styles.placeImage}
      source={props.placeImage}/>
    <Text>{props.placeName}</Text>
  </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    marginBottom: 3,
    padding: 10,
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center"
  },
  placeImage: {
    marginRight: 8,
    width: 30,
    height: 30
  }
});

export default ListItem;