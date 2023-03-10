import {StyleSheet, Text} from 'react-native';
import React from 'react';

const StockPrice = ({value, type, style}) => {
  return (
    <Text style={[style, value > 0 ? styles.stockGreen : styles.stockRed]}>
      {value > 0 && '+'} {value}
      {type === 'percent' && <Text> %</Text>}
    </Text>
  );
};

export default StockPrice;

const styles = StyleSheet.create({
  stockGreen: {
    color: '#0FBD71',
  },
  stockRed: {
    color: '#FF4C4C',
  },
});
