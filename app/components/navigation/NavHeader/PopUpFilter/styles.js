import {StyleSheet} from 'react-native';
import * as commonStyle from '../../../../includes/main-style';
import theme from '../../../../includes/styles/theme.style';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.COLOR_BINANCE_BLACK,
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  searchContainer: {
    justifyContent: 'center'
  },
  filterContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  filterText: {
    color: 'white',
    fontWeight: 'bold',
    paddingRight: 8,
    textAlign: 'right',
  },
});
