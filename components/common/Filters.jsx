import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Filters({ options = [] }) {
  const navigation = useNavigation();

  const handlePress = (opt) => {
    // Navigate to generic List screen, passing the resource key
    if (opt && opt.key) {
      navigation.navigate('List', { resource: opt.key, title: opt.label });
      return;
    }

    if (typeof opt === 'function') return opt();
    if (opt && typeof opt.onPress === 'function') return opt.onPress();
  };

  return (
    <View style={styles.container}>
      {options.map((opt, idx) => (
        <TouchableOpacity key={opt.key || idx} style={styles.filter} onPress={() => handlePress(opt)}>
          <Text>{opt.label || opt}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  filter: { backgroundColor: '#eee', padding: 8, borderRadius: 8, alignItems: 'center', flex: 1, marginHorizontal: 4 },
});
