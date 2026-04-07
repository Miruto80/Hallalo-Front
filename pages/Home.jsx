import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ProductList from '../components/common/ProductList';

const DATA = [
  {
    id: '1',
    title: 'Set Premium de Botellas',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1585386959984-a41552231658',
    brand: 'Luxury Brands Co.',
  },
  {
    id: '2',
    title: 'Botella Deportiva',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1590487989353-7b1b2d5b0c4b',
    brand: 'Sporty Co.',
  },
];

export default function Home({ navigation }) {
  const [query, setQuery] = useState('');

  const handlePress = (item) => {
    navigation && navigation.navigate && navigation.navigate('ProductDetail', { product: item });
  };

  return (
    <View style={styles.page}>
      <ProductList data={DATA} onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, width: '100%', padding: 16, backgroundColor: '#fff' },
});
