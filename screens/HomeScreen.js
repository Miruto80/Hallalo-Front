import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import ProductCard from "../components/ProductCard";

const DATA = [
  {
    id: "1",
    title: "Set Premium de Botellas",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1585386959984-a41552231658",
    brand: "Luxury Brands Co.",
  },
  {
    id: "2",
    title: "Botella Deportiva",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1590487989353-7b1b2d5b0c4b",
    brand: "Sporty Co.",
  },
];

export default function HomeScreen({ navigation }) {
  const renderProduct = ({ item }) => (
    <ProductCard
      item={item}
      onPress={() => navigation.navigate("ProductDetail", { product: item })}
    />
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>Catálogo de Productos</Text>

      {/* Search Bar */}
      <TextInput
        placeholder="Buscar productos..."
        style={styles.search}
      />

      {/* Filters */}
      <View style={styles.filters}>
        <TouchableOpacity style={styles.filter}>
          <Text>Todas las ciudades</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filter}>
          <Text>Todas las marcas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filter}>
          <Text>Categorías</Text>
        </TouchableOpacity>
      </View>

      {/* Product List */}
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  search: {
    backgroundColor: "#f1f1f1",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  filters: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  filter: {
    backgroundColor: "#eee",
    padding: 8,
    borderRadius: 8,
    alignItems: "center",
  },
  list: {
    paddingBottom: 16,
  },
});