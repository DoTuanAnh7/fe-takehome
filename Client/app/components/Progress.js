import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import theme from '../includes/styles/theme.style';

const NO_OF_STEPS = 5;

const styles = StyleSheet.create({
    progress: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: theme.SPACING_S,
        marginRight: theme.SPACING_S,
    },
    step: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: theme.COLOR_PRIMARY_EMERALD,
        height: 8,
        marginLeft: 14,
    },
    stepActive: {
        borderRadius: 10,
        backgroundColor: theme.COLOR_PRIMARY_GREEN,
        height: 8,
    },
});

const Progress = ({ step }) => {
    const currentStep = parseInt(step);

    return (
        <View style={styles.progress}>
            <View style={[{ flex: currentStep }, styles.stepActive]} />
            {[...Array(NO_OF_STEPS - currentStep)].map((value, index) => {
                return <View key={index} style={styles.step} />
            })}
        </View>
    );
};

Progress.propTypes = {
    step: PropTypes.number.isRequired,
};

export default Progress;