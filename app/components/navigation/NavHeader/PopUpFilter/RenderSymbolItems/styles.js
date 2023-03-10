import {StyleSheet} from 'react-native';
import theme from '../../../../../includes/styles/theme.style';

export default StyleSheet.create({
  table: {
    width: '100%',
  },
  tableHeader: {
    alignItems: 'center',
    backgroundColor: theme.COLOR_BINANCE_BLACK,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    flexDirection: 'row',
    height: 50,
  },
  tableRow: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 40,
  },
  columnRowTxt: {
    color: theme.COLOR_WHITE_LIGHT,
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical : 'center'

  },
});
