import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function ProductCard({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.brand}>{item.brand}</Text>

      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={styles.actions}>
        <Text>❤️ Me gusta</Text>
        <Text>💬 Comentar</Text>
        <Text>🔗 Compartir</Text>
      </View>

      <View style={styles.footer}>
        <Text>{item.title}</Text>
        <View>
          <Text style={styles.price}>${item.price}</Text>
          <Text style={styles.buy}>Comprar</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    borderRadius: 12,
    backgroundColor: "#fafafa",
    padding: 10,
  },
  brand: { fontWeight: "bold", marginBottom: 5 },
  image: { width: "100%", height: 200, borderRadius: 10 },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  price: { fontWeight: "bold" },
  buy: {
    backgroundColor: "#000",
    color: "#fff",
    padding: 5,
    borderRadius: 6,
    marginTop: 5,
    textAlign: "center",
  },
});