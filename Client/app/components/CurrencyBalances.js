import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Icon from './Icon';
import { StyleSheet, View, ViewPropTypes, TouchableOpacity } from 'react-native';
import Headline from './typography/Headline';
import Body from './typography/Body';
import { getCurrencyFormat, getCurrencyLabelFormat } from '../includes/currency_format';
import theme from '../includes/styles/theme.style';


const CURRENCY_CODE_USD = 'USD';
const CURRENCY_CODE_USDC = 'USDC';
const CURRENCY_CODE_BTC = 'BTC';
const CURRENCY_CODE_ETH = 'ETH';
const CURRENCY_CODE_AUD = 'AUD';



const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexColumn: {
    justifyContent: 'space-between',
  },
  icon: {
    marginRight: theme.SPACING_S,
  },
  greyText: {
    color: theme.COLOR_NEUTRAL_300,
  },
  alignRight: {
    marginLeft: 'auto',
    marginRight: 4,
  },
  marginLeft: {
    marginLeft: theme.SPACING_S,
  },
});

const getIconForCurrency = (type) => {
  switch (type) {
    case CURRENCY_CODE_USD:
      return require('../../assets/countries/united_states.png');
    case CURRENCY_CODE_USDC:
      return require('../../assets/countries/united_states.png');
    case CURRENCY_CODE_BTC:
      return require('../../assets/crypto/btc.png');
    case CURRENCY_CODE_ETH:
      return require('../../assets/crypto/eth.png');
    case CURRENCY_CODE_AUD:
      return require('../../assets/crypto/eth.png');
  }
};

const getCurrencyName = (type) => {
  switch (type) {
    case CURRENCY_CODE_USD:
      return 'USD';
    case CURRENCY_CODE_USDC:
      return 'USD';
    default:
      return type;
  }
}
const getPrefixForCurrency = (type) => {
  switch (type) {
    case CURRENCY_CODE_USD:
      return 'US$';
    case CURRENCY_CODE_USDC:
      return 'US$';
    case CURRENCY_CODE_BTC:
      return '₿';
    case CURRENCY_CODE_ETH:
      return 'Ξ';
    case CURRENCY_CODE_AUD:
      return "";
  }
};

const getLabelForCurrency = (type) => {
  switch (type) {
    case CURRENCY_CODE_USD:
      return 'US Dollars';
    case CURRENCY_CODE_USDC:
      return 'US Dollars';
    case CURRENCY_CODE_BTC:
      return 'Bitcoin';
    case CURRENCY_CODE_ETH:
      return 'Ethereum';
    case CURRENCY_CODE_AUD:
      return 'Australia Dollars';
  }
}


const CurrencyBalances = ({ type, balance, equivalentBalance, style, onPress, showArrow, deposit, withdrawal, wallet }) => (
  <TouchableOpacity
    onPress={onPress}
    style={style}
  >
    <Card style={styles.card}>
      <View style={styles.flexRow}>
        <Icon source={getIconForCurrency(type)} style={styles.icon} />
        <View style={styles.flexColumn}>
          <Headline type="H2">{getCurrencyName(type)}</Headline>
          <Body type="small" style={styles.greyText}>{getLabelForCurrency(type)}</Body>
        </View>
      </View>
      <View style={styles.flexColumn}>
        <View style={styles.flexRow}>
          <View style={styles.flexColumn}>
            <Headline type="H2">{deposit ? 'Current Balance' : `${getPrefixForCurrency(type)} ${getCurrencyFormat(type, balance)}`} </Headline>
            <Body type="small" style={[styles.greyText, styles.alignRight]}>
              {deposit && `${getPrefixForCurrency(type)} ${getCurrencyFormat(type, balance)}`}
              {wallet && `${getCurrencyLabelFormat(type, equivalentBalance)}`}
              {withdrawal && `${getCurrencyLabelFormat('AUD', equivalentBalance)}`}
            </Body>
          </View>
          {showArrow ?
            <Icon source={require('../../assets/images_assets/Arrow.png')} style={styles.marginLeft} />
            : null}
        </View>
      </View>
    </Card>
  </TouchableOpacity>

);

CurrencyBalances.propTypes = { 
  onPress: PropTypes.func,
  type: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
  equivalentBalance: PropTypes.string,
  style: ViewPropTypes.style,
  showArrow: PropTypes.bool,
  deposit: PropTypes.bool,
  withdrawal: PropTypes.bool,
  wallet: PropTypes.bool,
}

export default CurrencyBalances;