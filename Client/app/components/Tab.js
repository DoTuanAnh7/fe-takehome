import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../includes/styles/theme.style';
import SubHeadline from './typography/SubHeadline';
import Icon from './Icon';

const TAB_PADDING_VERTICAL = 6;

const styles = StyleSheet.create({
    tab: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.COLOR_PRIMARY_ALT,
        borderRadius: theme.BORDER_RADIUS_BUTTON,
        paddingLeft: theme.SPACING_S,
        paddingRight: theme.SPACING_S,
        paddingTop: TAB_PADDING_VERTICAL,
        paddingBottom: TAB_PADDING_VERTICAL,
    },
    text: {
        color: theme.COLOR_WHITE,
    }
});

const Tab = ({ onPress, showIcon, children }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.tab}>
            <SubHeadline style={styles.text}>{children}</SubHeadline>
            {showIcon ?
            <Icon source={require('../../assets/icons/Plus.png')}
                size="small"
                style={{ marginLeft: theme.SPACING_XXS }}
            />
            : null}
        </TouchableOpacity>
    )
};

Tab.propTypes = {
    onPress: PropTypes.func.isRequired,
    showIcon: PropTypes.bool,
    children: PropTypes.string.isRequired,
};

export default Tab;