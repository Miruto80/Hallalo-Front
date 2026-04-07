import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import ProductCard from '../ProductCard';

export default function ProductList({ data = [], onPress }) {
  if (!data || data.length === 0) {
    return (
      <View style={styles.empty}>
        <Text>No hay productos.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ProductCard item={item} onPress={() => onPress && onPress(item)} />}
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: { paddingBottom: 16 },
  empty: { padding: 16, alignItems: 'center' },
});
