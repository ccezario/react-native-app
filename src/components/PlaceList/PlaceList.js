import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from '../ListItem/ListItem'

const PlaceList = (props) => {
  return (
    <FlatList 
      style={styles.listContainer}
      data={props.places}
      renderItem={(info) => (
        <ListItem 
          placeName={info.item.value}
          placeImage={info.item.image}
          onItemPress={() => props.onItemSelected(info.item.key)}
        />
      )}
    />);
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default PlaceList;