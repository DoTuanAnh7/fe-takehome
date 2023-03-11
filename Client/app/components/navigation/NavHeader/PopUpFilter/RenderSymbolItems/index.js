import PropTypes from 'prop-types';
import React from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import theme from '../../../../../includes/styles/theme.style';
import styles from './styles';

const RenderSymbolItems = ({data, selectedData}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={{
        paddingTop: 20,
        backgroundColor: theme.COLOR_BINANCE_BLACK,
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: theme.COLOR_GOLDEN_YELLOW,
        paddingBottom: 10,
      }}
      onPress={() => selectedData(item.symbol)}>
      <Text style={styles.columnRowTxt}>{item.symbol}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={styles.table}
      data={data}
      keyExtractor={item => item._id}
      renderItem={renderItem}
    />
  );
};

RenderSymbolItems.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

RenderSymbolItems.defaultProps = {
  data: [],
};

export default RenderSymbolItems;
