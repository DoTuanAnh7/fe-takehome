import {noop} from 'lodash';
import PropTypes from 'prop-types';
import React, {forwardRef, useState, useEffect} from 'react';
import {SafeAreaView, TouchableWithoutFeedback, View} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import * as commonStyle from '../../../../includes/main-style';
import theme from '../../../../includes/styles/theme.style';
import Search from '../../../Search';
import RenderSymbolItems from './RenderSymbolItems';
import styles from './styles';

const PopUpFilter = forwardRef(
  ({data, filter, onSelect, selectedSymbol}, ref) => {
    const [listData, setListData] = useState();


    useEffect(() => {
      data && setListData(data)
    }, [data])
  
    const handleSearch = search =>
      setListData(
        data.filter(item =>
          item.symbol.toLowerCase().includes(search.toLowerCase()),
        ),
      );
    const handleSelect = selectedSymbolData => {
      selectedSymbol(selectedSymbolData);
    };

    const renderContent = () => (
      <TouchableWithoutFeedback>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <View style={styles.searchContainer}>
              <Search
                onSearch={handleSearch}
                backgroundColor={theme.COLOR_BINANCE_BLACK}
              />
            </View>
          </View>
          <View style={{paddingBottom: 130}}>
            <RenderSymbolItems data={listData} selectedData={handleSelect} />
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );

    return (
      <BottomSheet
        ref={ref}
        borderRadius={10}
        initialSnap={1}
        renderContent={renderContent}
        snapPoints={[commonStyle.getResponsiveScreenHeight(40), 0]}
      />
    );
  },
);

PopUpFilter.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
  filter: PropTypes.string,
  onSelect: PropTypes.func,
};

PopUpFilter.defaultProps = {
  data: [],
  filter: 'ALL',
  onSelect: noop,
};

PopUpFilter.displayName = 'PopUpFilter';

export default PopUpFilter;
