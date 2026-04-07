import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ImageSlider({ images = [] }) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text>Image slider placeholder</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { height: 180, justifyContent: 'center', alignItems: 'center', marginBottom: 10 },
});
