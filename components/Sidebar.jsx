import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Sidebar() {
  return (
    <View style={styles.container}>
      <Text style={styles.user}>Usuario Demo</Text>
      <Text style={styles.email}>usuario@email.com</Text>

      <TouchableOpacity style={styles.item}>
        <Text>Mi Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Text>Mis Pedidos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Text>Favoritos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Text>Configuración</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logout}>
        <Text style={{ color: "#fff" }}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  user: { fontSize: 18, fontWeight: "bold" },
  email: { color: "gray", marginBottom: 20 },
  item: { paddingVertical: 10 },
  logout: {
    marginTop: 20,
    backgroundColor: "red",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
});