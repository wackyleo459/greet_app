import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';

function CustomButton({title, onPress, width}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.buttonContainer, {width: width}]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 16,
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
});

export default CustomButton;
