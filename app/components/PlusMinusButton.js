import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import { Icon } from '@rneui/themed';

import theme from '../includes/styles/theme.style';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const PICKER_TYPE_NORMAL = 'normal';
export const PICKER_TYPE_BOLD = 'bold';

const getPickerStyles = (type, inline) => {
  const pickerStyles = {
    alignItems: 'center',
    flex: 1,
    paddingTop: !inline ? theme.SPACING_S : 0,
    paddingBottom: !inline ? theme.SPACING_S : 0,
    paddingLeft: 0,
    marginLeft: 80,
    paddingRight: theme.ICON_SIZE + theme.SPACING_XS,
    color: theme.COLOR_NEUTRAL_BLACK,
    fontFamily: type === PICKER_TYPE_BOLD ? theme.FONT_FAMILY_MEDIUM : theme.FONT_FAMILY_BASE,
    fontSize: theme.FONT_SIZE_HEADLINE_H3,
    letterSpacing: 0,
  };

  const pickerContainerStyles = {
    flexDirection: 'row', alignItems: 'center',
  };

  return {
    viewContainer: { flexGrow: 1 },
    inputIOSContainer: pickerContainerStyles,
    inputIOS: pickerStyles,
    inputAndroidContainer: pickerContainerStyles,
    inputAndroid: pickerStyles,
  };
};

const PlusMinusButton = ({
  editAble,
  value,
  setValue,
  placeholder,
  textColorGrey
}) => {
  const flexRow = {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingLeft: 10, paddingRight: 10
  };

  console.log(typeof (value));
  const incrementValue = () => {
    if (value >= 0) {
      count = parseInt(value) + 1;
    }
    return setValue(count)
  }
  const decrementValue = () => {
    if (value >= 0) { count = value - 1 }
    return setValue(count)
  }

  return (
    <View style={flexRow}>
      <TouchableOpacity
        onPress={() => decrementValue()}
      >
        <Icon
          name={'minus'}
          size={18}
          color="#FFFFFF"
          type='font-awesome-5'
          onPress={() => decrementValue()}

        />
      </TouchableOpacity>
      <TextInput
        style={{
          color: '#FFFFFF',
          fontSize: theme.FONT_SIZE_HEADLINE_H2,

        }}
        onChangeText={(text) => setValue((text))}
        numberOfLines={1}
        value={value}
        keyboardType="numeric"
        editable={editAble}
        selectTextOnFocus={editAble}
        placeholder={placeholder ? placeholder.toString() : '1'}
        placeholderTextColor={textColorGrey ? theme.COLOR_SECONDARY_GREY : theme.COLOR_WHITE}
      />

      <TouchableOpacity
        onPress={() => incrementValue()}
      >
        <Icon
          name={'plus'}
          size={18}
          color="#FFFFFF"
          type='font-awesome-5'
          onPress={() => incrementValue()}

        />
      </TouchableOpacity>


    </View>
  );
}

PlusMinusButton.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number,]),
  placeholder: PropTypes.object,
  editAble: PropTypes.bool,
  textColorGrey: PropTypes.bool
};

export default PlusMinusButton;
