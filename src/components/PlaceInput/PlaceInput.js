import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

class PlaceInput extends React.Component {
  state = {
    placeName: ''
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  submitHandler = () => {
    this.props.onPlaceAdded(this.state.placeName);

    this.setState({
      placeName: ""
    });
  };

  render() {
    return (
    <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeInput}
          placeholder="An Awesome Place"
          onChangeText={this.placeNameChangedHandler}
          value={this.state.placeName} 
        />
        <Button
          style={styles.placeButton}
          title="Add"
          onPress={this.submitHandler}
        />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});

export default PlaceInput;