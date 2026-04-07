import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import useApi from '../hooks/useApi';
import Box_List from './common/Box_List';

// List reutilizable: recibe `endpoint` completo o `resource` (p.ej. 'marca', 'categoria')
const List = ({ endpoint, resource, title, onItemPress }) => {
  const [items, setItems] = useState([]);
  const { loading, error, get } = useApi();

  const path = endpoint || (resource ? `/api/${resource}` : null);

  useEffect(() => {
    const cargar = async () => {
      if (!path) return;
      try {
        const data = await get(path);
        const lista = Array.isArray(data) ? data : data?.marcas || data?.items || data?.result || [];
        setItems(lista);
      } catch (err) {
        console.error('Error cargando lista:', err);
      }
    };

    cargar();
  }, [get, endpoint, resource]);

  if (loading) {
    return (
      <View style={styles.center}>
        {title && <Text>{title}</Text>}
        <ActivityIndicator size="large" color="#007bff" />
        <Text style={styles.text}>Cargando...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>Error al cargar: {error.message || 'desconocido'}</Text>
      </View>
    );
  }

  if (!items.length) {
    if (!path) {
      return (
        <View style={styles.center}>
          <Text style={styles.text}>No se especificó `resource` ni `endpoint` para cargar la lista.</Text>
        </View>
      );
    }

    return (
      <View style={styles.center}>
        <Text style={styles.text}>No hay elementos disponibles</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => (item.id ? item.id.toString() : item.N_marca || Math.random().toString())}
      renderItem={({ item }) => (
        <Box_List item={item} onPress={(it) => onItemPress && onItemPress(it)} />
      )}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: { paddingVertical: 8 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  text: { fontSize: 16, color: '#333' },
  error: { color: 'red', fontWeight: 'bold' },
  item: { padding: 12, borderBottomWidth: 1, borderBottomColor: '#ddd' },
  nombre: { fontSize: 16, color: '#000' },
});

export default List;
