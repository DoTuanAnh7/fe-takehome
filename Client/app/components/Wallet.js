import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import DropShadow from 'react-native-drop-shadow';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../includes/styles/theme.style';
import Headline from './typography/Headline';
import Icon from './Icon';
import Body from './typography/Body';
import { getCurrencyFormat } from '../includes/currency_format';
import { formatBSBNumber } from "../helper/common"


const PADDING_HORIZONTAL = 28;

const CURRENCY_CODE_USDC = 'USDC';
const CURRENCY_CODE_BTC = 'BTC';
const CURRENCY_CODE_ETH = 'ETH';
const CURRENCY_CODE_AUD = 'AUD';

const styles = StyleSheet.create({
    shadow: {
        shadowColor: theme.COLOR_NEUTRAL_300,
        shadowOffset: {
            width: 0,
            height: -4,
        },
        shadowOpacity: 0.17,
        shadowRadius: 60,
    },
    gradientBorder: {
        borderRadius: theme.BORDER_RADIUS_CARD_S,
        width: '100%',
        aspectRatio: 16 / 9.5,
    },
    card: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: theme.COLOR_WHITE,
        borderRadius: theme.BORDER_RADIUS_CARD_S,
        overflow: 'hidden',
        margin: 1, // Show 1px gradient border
    },
    info: {
        paddingTop: theme.SPACING_S,
        paddingBottom: theme.SPACING_S,
        paddingLeft: PADDING_HORIZONTAL,
        paddingRight: PADDING_HORIZONTAL,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    imageRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        width: 32,
        height: 24,
    },
    watermark: {
        width: 57,
        height: 11,
    },
    currency: {
        flexDirection: 'row',
    },
    flag: {
        marginRight: theme.SPACING_XS,
    },
    gradient: {
        width: '100%',
        backgroundColor: '#F0F0F5',
        borderBottomLeftRadius: theme.BORDER_RADIUS_CARD_S,
        borderBottomRightRadius: theme.BORDER_RADIUS_CARD_S,
        aspectRatio: 6.3 / 1,
        paddingLeft: PADDING_HORIZONTAL,
        paddingRight: PADDING_HORIZONTAL,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    balanceLabel: {
        color: theme.COLOR_NEUTRAL_300,
        fontFamily: theme.FONT_FAMILY_BASE,
        fontSize: 10,
    },
});


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

const Wallet = ({ currency, balance, style, salary, bsbNumber, accountNumber, name }) => (
    <DropShadow style={[styles.shadow, style]}>
        <LinearGradient
            colors={[
                'rgba(255, 255, 255, 0.7)',
                'rgba(255, 255, 255, 0.19)',
                'rgba(98, 98, 98, 0.12)',
            ]}
            start={{ x: 0.0, y: -0.0849, x: 0.5683 }}
            end={{ x: -0.0849, y: 0.5683, y: 1.8674 }}
            useAngle={true}
            angle={114.12}
            style={styles.gradientBorder}
        >

            {
                salary ?
                    <View style={styles.card}>
                        <View style={styles.info}>
                            <View style={styles.imageRow}>
                                <Image source={require('../../assets/images_assets/card_logo.png')} style={styles.logo} />
                                <Image source={require('../../assets/images_assets/bobbob_watermark.png')} style={styles.watermark} />
                            </View>
                            <View style={styles.currency}>
                                <Icon source={getIconForCurrency(currency)} style={styles.flag} />
                                <Headline type="H1">{`${getPrefixForCurrency(currency)} Account`}</Headline>
                                <View
                                    style={{ marginLeft: 'auto', marginTop: theme.SPACING_XS }}
                                >
                                    <Body type="small" style={{ color: theme.COLOR_PRIMARY_GREY }}>{name}</Body>
                                </View>
                            </View>

                        </View>
                        <ImageBackground source={require('../../assets/images_assets/card_gradient.png')} style={styles.gradient}>
                            <Headline style={{ fontSize: 12 }} type="H3">BSB: {formatBSBNumber(bsbNumber)}</Headline>
                            <Headline style={{ fontSize: 12 }} type="H3">Account Number: {accountNumber}</Headline>
                        </ImageBackground>
                    </View>

                    :
                    <View style={styles.card}>
                        <View style={styles.info}>
                            <View style={styles.imageRow}>
                                <Image source={require('../../assets/images_assets/card_logo.png')} style={styles.logo} />
                                <Image source={require('../../assets/images_assets/bobbob_watermark.png')} style={styles.watermark} />
                            </View>
                            <View style={styles.currency}>
                                <Icon source={require('../../assets/countries/united_states.png')} style={styles.flag} />
                                <Headline type="H1">US Dollar</Headline>
                            </View>
                        </View>
                        <ImageBackground source={require('../../assets/images_assets/card_gradient.png')} style={styles.gradient}>
                            <Text style={styles.balanceLabel}>Total Balance</Text>
                            <Headline type="H3">{getCurrencyFormat('USD', balance)}</Headline>
                        </ImageBackground>
                    </View>
            }
        </LinearGradient>
    </DropShadow>
);

Wallet.propTypes = {
    currency: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
    style: ViewPropTypes.style,
    salary: PropTypes.bool
};

export default Wallet;