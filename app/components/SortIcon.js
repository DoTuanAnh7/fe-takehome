import React from 'react';

import { TouchableOpacity } from 'react-native';
import { Icon }             from '@rneui/themed';

const SortIcon = ({ name, type, color, size, firstIcon, secondIcon }) => {
    return (
        <TouchableOpacity>
            { firstIcon && <Icon
                name={ name ? name : "caretup" }
                type={ type ? type : "antdesign" }
                color={ color ? color : '#666666' }
                size={ size }
            /> }
            { secondIcon && <Icon
                name={ name ? name : "caretdown" }
                type={ type ? type : "antdesign" }
                color={ color ? color : '#666666' }
                size={ size }
            /> }
        </TouchableOpacity>
    );
};

export default SortIcon;


