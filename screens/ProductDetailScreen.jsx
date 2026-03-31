import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function ProductDetailScreen({ route }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />

      <Text style={styles.brand}>{product.brand}</Text>

      <Text style={styles.title}>{product.title}</Text>

      <Text style={styles.price}>${product.price}</Text>

      <Text style={styles.desc}>
        Nueva colección de botellas minimalistas de edición limitada.
      </Text>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.btn}>
          <Text>Guardar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text>Compartir</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.buyBtn}>
        <Text style={{ color: "#fff" }}>Comprar ahora</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  image: { width: "100%", height: 300, borderRadius: 12 },
  brand: { marginTop: 10, color: "gray" },
  title: { fontSize: 22, fontWeight: "bold" },
  price: { fontSize: 18, marginVertical: 5 },
  desc: { marginVertical: 10 },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 8,
    width: "48%",
    alignItems: "center",
  },
  buyBtn: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
});