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
    marginLeft: {
        marginLeft: theme.SPACING_S,
    },
});

const getIconForCurrency = (type) => {
    switch (type) {
        case CURRENCY_CODE_USD:
            return require('../../assets/countries/united_states.png');
    }
};

const getPrefixForCurrency = (type) => {
    switch (type) {
        case CURRENCY_CODE_USD:
            return 'US$';
    }
};

const getLabelForCurrency = (type) => {
    switch (type) {
        case CURRENCY_CODE_USD:
            return 'US Dollars';
    }
}

const Currency = ({ type, balance, showArrow, style }) => (
    <Card style={[styles.card, style]}>
        <View style={styles.flexRow}>
            <Icon source={getIconForCurrency(type)} style={styles.icon} />
            <View style={styles.flexColumn}>
                <Headline type="H2">{type}</Headline>
                <Body type="small" style={styles.greyText}>{getLabelForCurrency(type)}</Body>
            </View>
        </View>
        <View style={styles.flexColumn}>
            <View style={styles.flexRow}>
                <View style={styles.flexColumn}>
                    <Headline type="H2">Current Balance</Headline>
                    <Body type="small" style={[styles.greyText, styles.alignRight]}>
                        {getPrefixForCurrency(type)} {getCurrencyFormat(type, balance)}
                    </Body>
                </View>
                {showArrow ?
                    <Icon source={require('../../assets/images_assets/Arrow.png')} style={styles.marginLeft} />
                : null}
            </View>
        </View>
    </Card>
);

Currency.propTypes = {
    type: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
    showArrow: PropTypes.bool,
    style: ViewPropTypes.style,
}

export default Currency;