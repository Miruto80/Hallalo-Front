import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';
import SearchBar from './SearchBar';
import Filters from './Filters';

export default function Navbar() {
    const [query, setQuery] = useState('');
  return (
    <View style={styles.navbar}>
      <Header title="Catálogo de Productos" />
      <SearchBar value={query} onChangeText={setQuery} placeholder="Buscar productos..." />
       <Filters
              options={[
                { key: 'ciudade', label: 'Ciudades' },
                { key: 'marca', label: 'Marcas' },
                { key: 'categoria', label: 'Categorías' },
              ]}
            />
    </View>
  );
}
const styles = StyleSheet.create({
  navbar: { padding: 16, backgroundColor: '#fff' },
});