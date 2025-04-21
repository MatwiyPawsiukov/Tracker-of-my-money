import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Calculator = ({ onChange }) => {
  const [value, setValue] = React.useState('0');

  const handlePress = (num) => {
    const newValue = value === '0' ? num : value + num;
    setValue(newValue);
    onChange(parseFloat(newValue).toFixed(2));
  };

  const handleDelete = () => {
    const newValue = value.length > 1 ? value.slice(0, -1) : '0';
    setValue(newValue);
    onChange(parseFloat(newValue).toFixed(2));
  };

  const handleClear = () => {
    setValue('0');
    onChange('0.00');
  };

  const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0'];

  return (
    <View style={styles.grid}>
      {buttons.map((btn, i) => (
        <TouchableOpacity key={i} style={styles.btn} onPress={() => handlePress(btn)}>
          <Text style={styles.txt}>{btn}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={[styles.btn, styles.special]} onPress={handleDelete}>
        <Text style={styles.txt}>⌫</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn, styles.special]} onPress={handleClear}>
        <Text style={styles.txt}>C</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  btn: {
    width: '30%',
    padding: 20,
    marginBottom: 10,
    borderRadius: 12,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  special: {
    backgroundColor: '#fdd',
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Calculator;
