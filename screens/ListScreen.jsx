import React from 'react';
import { View, StyleSheet } from 'react-native';
import List from '../components/List';

export default function ListScreen({ route }) {
  const { resource, endpoint, title } = route.params || {};

  return (
    <View style={styles.container}>
      <List resource={resource} endpoint={endpoint} title={title} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
});
