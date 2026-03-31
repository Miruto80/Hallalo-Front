import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import useApi from '../hooks/useApi';

const Lista = () => {
  const [marcas, setMarcas] = useState([]);
  const { loading, error, get } = useApi();

  useEffect(() => {
    const cargarMarcas = async () => {
      try {
        const data = await get('/api/marca');
        console.log("Datos recibidos de la API:", data);
        const lista = Array.isArray(data) ? data : data?.marcas || [];
        setMarcas(lista);
      } catch (err) {
        console.error('Error cargando marcas:', err);
      }
    };

    cargarMarcas();
  }, [get]);

  if (loading) {
    return (
      <View style={styles.center}>
        <Text>Marcas</Text>
        <ActivityIndicator size="large" color="#007bff" />
        <Text style={styles.text}>Cargando marcas...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>Error al cargar marcas: {error.message || 'desconocido'}</Text>
      </View>
    );
  }

  if (!marcas.length) {
    return (
      <View style={styles.center}>
        <Text style={styles.text}>No hay marcas disponibles</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={marcas}
      keyExtractor={(item) => (item.id ? item.id.toString() : item.N_marca || Math.random().toString())}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.nombre}>{item.N_marca || 'Sin nombre'}</Text>
        </View>
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

export default Lista;
