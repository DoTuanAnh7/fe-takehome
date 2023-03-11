import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Icon from './Icon';
import { StyleSheet, View, ViewPropTypes } from 'react-native';
import Headline from './typography/Headline';
import Body from './typography/Body';
import { getCurrencyFormat } from '../includes/currency_format';
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
        alignSelf: 'flex-end',
    },
    arrow: {
        marginLeft: theme.SPACING_XS,
        marginRight: -theme.SPACING_XS,
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

const getNameForCurrency = (type) => {
    switch (type) {
        case CURRENCY_CODE_USD:
            return 'USD';
        case CURRENCY_CODE_USDC:
            return 'USD';
        default:
            return type;
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

const DirectDebit = ({ type, amount, frequency, showArrow, style }) => (
    <Card style={[styles.card, style]}>
        <View style={styles.flexRow}>
            <Icon source={getIconForCurrency(type)} style={styles.icon} />
            <View style={styles.flexColumn}>
                <Headline type="H2">{getNameForCurrency(type)}</Headline>
                <Body type="small" style={styles.greyText}>{getLabelForCurrency(type)}</Body>
            </View>
        </View>
        <View style={styles.flexColumn}>
            <View style={styles.flexRow}>
                <View style={styles.flexColumn}>
                    <Headline type="H2">{getCurrencyFormat('AUD', amount)}</Headline>
                    <Body type="small" style={[styles.greyText, styles.alignRight]}>
                        {frequency}
                    </Body>
                </View>
                {showArrow ?
                    <Icon source={require('../../assets/images_assets/Arrow.png')} style={styles.arrow} />
                    : null}
            </View>
        </View>
    </Card>
);

DirectDebit.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    frequency: PropTypes.string.isRequired,
    showArrow: PropTypes.bool,
    style: ViewPropTypes.style,
}

export default DirectDebit;