import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import theme from '../includes/styles/theme.style';
import {ScaleDecorator} from 'react-native-draggable-flatlist';
import _get from 'lodash/get';
import {renderPriceVolatility} from './SuperChargeWallet';
import {AuthContext} from '../context/AuthContext';
import {GestureResponderEvent} from 'react-native';
import {DOUBLE_PRESS_DELAY, SOCKET_TYPE} from '../const';

export type IStock = {
  _deleted: boolean,
  _id: string,
  ceil_price: number,
  createdAt: string | Date,
  floor_price: number,
  high: number,
  low: number,
  market_price: number,
  reference_price: number,
  symbol: string,
  today_volume: number,
  updatedAt: string | Date,
  watchListId: string,
  handleDeleteItem: () => void,
  item: {} | string[],
};

const StockItem = ({
  item,
  drag,
  isActive,
  condition,
  conditionForTrendColor,
  conditionForMarketPriceColor,
  showModalDelete,
  getId,
}) => {
  const {ws, serverState, serverMessages, authState} = useContext(AuthContext);
  const [cloneItem, setCloneItem] = useState(item);
  const marketPrice = _get(cloneItem, ['market_price']);
  const referencePrice = _get(cloneItem, ['reference_price']);
  const symbol = _get(cloneItem, ['symbol']);
  const _id = _get(cloneItem, ['_id']);

  const priceDiff = renderPriceVolatility(marketPrice, referencePrice);
  let lastPress = 0;

  const onDoublePress = () => {
    const time = new Date().getTime();
    const delta = time - lastPress;
    if (delta < DOUBLE_PRESS_DELAY) {
      showModalDelete();
      getId();
    }
    lastPress = time;
  };

  useEffect(() => {
    if (ws && serverState === 'Connected' && symbol) {
      ws.send(
        JSON.stringify({
          event: SOCKET_TYPE.join,
          data: {
            roomId: `trade-stream-${symbol}`,
            userId: authState.userId,
          },
        }),
      );
    }
    return () => {
      ws.send(
        JSON.stringify({
          event: SOCKET_TYPE.leave,
          data: {
            roomId: `trade-stream-${symbol}`,
            userId: authState.userId,
          },
        }),
      );
    };
  }, [serverState, symbol]);

  useEffect(() => {
    if (
      serverMessages.event === SOCKET_TYPE.trade &&
      serverMessages.data.symbol === symbol
    ) {
      const {market_price, volumes, low, high} = serverMessages.data;
      setCloneItem({
        ...item,
        market_price,
        today_volume: item.today_volume + volumes,
        low,
        high,
      });
    }
  }, [serverMessages]);

  return (
    <ScaleDecorator>
      <TouchableOpacity
        activeOpacity={1}
        onLongPress={drag}
        disabled={isActive}>
        <View
          onStartShouldSetResponder={(event: GestureResponderEvent) =>
            onDoublePress()
          }
          style={styles.container}
          key={_id}>
          <View style={styles.justifyCenter}>
            <Text style={[styles.tableTitle, styles.fullNameSize]}>
              {symbol}
            </Text>
            <Text style={styles.tableTitle}>{item.name}</Text>
          </View>

          <View style={styles.symbolContainer}>
            {/*Display Symbol*/}
            <Text style={styles.currency}>VND</Text>

            {/*Display Price*/}
            <View>
              <View
                style={{
                  backgroundColor: condition,
                  width: 80,
                  alignItems: 'center',
                  paddingHorizontal: 10,
                  paddingVertical: 6,
                  borderRadius: 8,
                }}>
                <Text
                  style={{color: conditionForMarketPriceColor, fontSize: 16}}>
                  {marketPrice?.toFixed(2)}
                </Text>
              </View>
              <Text style={{color: conditionForTrendColor, fontSize: 10}}>
                {`${priceDiff}  % Post`}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </ScaleDecorator>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 6,
    backgroundColor: theme.COLOR_BINANCE_BLACK,
    borderColor: theme.COLOR_PRIMARY_GREY,
    borderTopWidth: 0.5,
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  tableTitle: {
    color: theme.COLOR_NEUTRAL_400,
    fontWeight: 'bold',
  },
  fullNameSize: {
    fontSize: theme.FONT_SIZE_L,
  },
  symbolContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '40%',
  },
  currency: {
    color: theme.COLOR_NEUTRAL_400,
    fontSize: theme.FONT_SIZE_L,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
});

export default StockItem;
