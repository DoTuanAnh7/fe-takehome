import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import theme from '../includes/styles/theme.style';
import Headline from './typography/Headline';

const PADDING_HORIZONTAL = 28;

const CURRENCY_CODE_USDC = 'USDC';
const CURRENCY_CODE_BTC = 'BTC';
const CURRENCY_CODE_ETH = 'ETH';
const CURRENCY_CODE_AUD = 'AUD';

const styles = StyleSheet.create({
    shadow: {
        shadowColor: theme.COLOR_NEUTRAL_300, shadowOffset: {
            width: 0, height: -4,
        }, shadowOpacity: 0.17, shadowRadius: 60,
    }, card: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: theme.COLOR_WHITE,
        borderRadius: theme.BORDER_RADIUS_CARD_S,
        overflow: 'hidden',
        margin: 1, // Show 1px gradient border
    }, info: {
        paddingVertical: theme.SPACING_S,
        paddingLeft: PADDING_HORIZONTAL,
        paddingRight: PADDING_HORIZONTAL,
        flexDirection: 'column',
        justifyContent: 'space-between',
    }, logo: {
        width: 32, height: 24,
    }, watermark: {
        width: 57, height: 11,
    }, currency: {
        flexDirection: 'row',
    }, flag: {
        marginRight: theme.SPACING_XS,
    }, gradient: {
        aspectRatio: 6.3, paddingLeft: PADDING_HORIZONTAL, flexDirection: 'column', justifyContent: 'center',
    }, balanceLabel: {
        color: theme.COLOR_NEUTRAL_300, fontFamily: theme.FONT_FAMILY_BASE, fontSize: 10,
    }, row: {
        flexDirection: 'row',
    }
});

const getLabelForCurrency = (type) => {
    switch (type) {
        case CURRENCY_CODE_USDC:
            return 'US Dollar';
        case CURRENCY_CODE_BTC:
            return <Headline type="H1">BTC <Headline style={{ color: theme.COLOR_PRIMARY_GREY }} type="H3">Bitcoin</Headline></Headline>
        case CURRENCY_CODE_ETH:
            return <Headline type="H1">ETH <Headline style={{ color: theme.COLOR_PRIMARY_GREY }} type="H3">Ethereum</Headline></Headline>
        case CURRENCY_CODE_AUD:
            return 'AU Dollar';
    }
}

const getIconForCurrency = (type) => {
    switch (type) {
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

const renderGradient = (type) => {
    switch (type) {
        case CURRENCY_CODE_USDC:
            return require('../../assets/images_assets/card_gradient.png')
        case CURRENCY_CODE_BTC:
            return require('../../assets/icons/card_yellow_gradient.png')
        case CURRENCY_CODE_ETH:
            return require('../../assets/icons/card_purple_gradient.png')
        case CURRENCY_CODE_AUD:
            return require('../../assets/icons/card_yellow_gradient.png')
    }
}

const renderLogoGradient = (type) => {
    switch (type) {
        case CURRENCY_CODE_USDC:
            return require('../../assets/images_assets/card_logo.png')
        case CURRENCY_CODE_BTC:
            return require('../../assets/images_assets/card_logo_yellow.png')
        case CURRENCY_CODE_ETH:
            return require('../../assets/images_assets/card_logo_purple.png')
        case CURRENCY_CODE_AUD:
            return require('../../assets/images_assets/card_logo.png')


    }
}

export const renderPriceVolatility = (marketPrice, referencePrice) => {
    return(((marketPrice - referencePrice) / referencePrice).toFixed(2))
}

const renderColorBasedOnPrice = (price) => {
    if (price > 0) return theme.COLOR_SECONDARY_GREEN;
    return price< 0 ? theme.COLOR_NEGATIVE : theme.COLOR_NEUTRAL_300;
}

const getPrefixForCurrency = (type) => {
    switch (type) {
        case CURRENCY_CODE_USDC:
            return 'US$';
        case CURRENCY_CODE_BTC:
            return '₿';
        case CURRENCY_CODE_ETH:
            return 'Ξ';
        case CURRENCY_CODE_AUD:
            return 'A$';
    }
};

export const renderCryptoBalance = (type, amount) => {
    if (type === 'USDC') {
        return Number(amount)
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,');
    } else {
        return Number(amount)
            .toFixed(6)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
}

const SuperChargeWallet = ({item, index}) => {
    const priceDiff = renderPriceVolatility(item?.market_price, item?.reference_price)
    return (
        <View style={styles.card} key={index}>
            <View style={styles.info}>
                <View style={styles.currency}>
                    <Headline type="H1">{item.symbol}</Headline>
                    <Headline style={{color: renderColorBasedOnPrice(priceDiff), paddingLeft: 10, paddingRight: 5}} type="H1">{item?.market_price?.toFixed(2)} VND</Headline>
                </View>
            </View>
            <View style={styles.gradient}>
                <Text style={styles.balanceLabel}>Diff from Yesterday</Text>
                <View style={styles.row}>
                    <Headline type="H1">{item.name}</Headline>
                    <Headline type="H1" style={{color: renderColorBasedOnPrice(priceDiff)}}>  {priceDiff}%</Headline>
                </View>
            </View>
        </View>
    );
}

export default SuperChargeWallet;
