import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

export default function Box_List({ item, onPress }) {
  const label = item?.N_marca || item?.name || item?.title || 'Sin nombre';

  return (
    <TouchableOpacity style={styles.box} onPress={() => onPress && onPress(item)} activeOpacity={0.8}>
      <View style={styles.content}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 4,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  content: { height: 72, justifyContent: 'center', alignItems: 'center' },
  label: { fontSize: 16, fontWeight: '600', textAlign: 'center' },
});
