import {NavigationContext} from '@react-navigation/native';
import {Icon} from '@rneui/themed';
import PropTypes from 'prop-types';
import React, {useContext, useRef} from 'react';
import {StatusBar, StyleSheet, TouchableOpacity, View} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {AuthContext} from '../../../context/AuthContext';
import theme from '../../../includes/styles/theme.style';
import Avatar from '../../Avatar';
import HelpModal from '../../HelpModal';
import IconComponent from '../../Icon';
import Progress from '../../Progress';
import Headline from '../../typography/Headline';
import PopUpFilter from './PopUpFilter';

const NAVHEADER_TYPE_DARK = 'dark';
const NAVHEADER_TYPE_LIGHT = 'light';

// Height of the StatusBar on Android
const statusBarHeight = StatusBar.currentHeight;

const getStylesForType = type => {
  return StyleSheet.create({
    header: {
      // justifyContent: 'flex-end',
      paddingLeft: theme.SPACING_MS,
      paddingRight: theme.SPACING_MS,
      // Minus the height of the StatusBar on Android
      // height: DeviceInfo.hasNotch()
      //   ? 108 - statusBarHeight
      //   : 100 - statusBarHeight,
      marginBottom: theme.SPACING_S,
    },
    progress: {
      flexDirection: 'row',
    },
    flexRow: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: theme.SPACING_XS,
      paddingBottom: theme.SPACING_S,
    },
    flex: {
      flex: 1,
      flexDirection: 'row',
    },
    icon: {
      marginRight: theme.SPACING_XS,
    },
    text: {
      color:
        type === NAVHEADER_TYPE_LIGHT
          ? theme.COLOR_GOLDEN_YELLOW
          : theme.COLOR_GOLDEN_YELLOW,
    },
  });
};

const NavHeader = ({
  type,
  progress,
  showBack,
  showAvatar,
  user,
  icon,
  helpModalHeading,
  helpModalContent,
  children,
  setting,
  search,
  data,
  symbol,
  isMyAccount,
}) => {
  const navigation = useContext(NavigationContext);
  const styles = getStylesForType(type ? type : NAVHEADER_TYPE_DARK);
  const authContext = useContext(AuthContext);

  const openFilter = () => ref.current?.snapTo(0);
  const ref = useRef(null);

  const handleSelect = selectedSymbol => {
    symbol(selectedSymbol);
  };

  return (
    <>
      <View style={styles.header}>
        <View styles={styles.progress}>
          {progress ? <Progress step={progress} /> : null}
        </View>
        <View style={styles.flexRow}>
          <View style={styles.flex}>
            {showBack ? (
              <TouchableOpacity
                style={{marginLeft: theme.SPACING_XS}}
                onPress={() =>
                  navigation.canGoBack()
                    ? navigation.goBack()
                    : navigation.navigate('Dashboard')
                }>
                {type === NAVHEADER_TYPE_LIGHT ? (
                  <IconComponent
                    source={require('../../../../assets/icons/Arrow-Left-white.png')}
                  />
                ) : (
                  <IconComponent
                    source={require('../../../../assets/icons/Arrow-Left.png')}
                  />
                )}
              </TouchableOpacity>
            ) : null}
            {setting ? (
              <TouchableOpacity
                style={{marginLeft: theme.SPACING_XS}}
                onPress={() => navigation.goBack()}>
                <IconComponent
                  source={require('../../../../assets/icons/Close.png')}
                />
              </TouchableOpacity>
            ) : null}
            {showAvatar && user ? (
              <TouchableOpacity
                style={{marginLeft: 10}}
                onPress={() =>
                  navigation.navigate('Setting', {
                    firstname: user.firstName,
                    lastName: user.lastName,
                    userFullName: `${user.firstName} ${user.lastName}`,
                    email: user.email,
                    phoneno: user.mobile.number,
                    referralCode: user.code,
                  })
                }>
                <Avatar
                  dashboard
                  type="small"
                  name={`${user.firstName} ${user.lastName}`}
                />
              </TouchableOpacity>
            ) : null}
          </View>
          <View style={styles.icon}>{icon ? icon : null}</View>
          <Headline type="H2" align="center" style={[styles.text]}>
            {children}
          </Headline>
          <View style={[styles.flex, {justifyContent: 'flex-end'}]}>
            {helpModalContent ? (
              <HelpModal greenIcon heading={helpModalHeading}>
                {helpModalContent}
              </HelpModal>
            ) : null}
            {setting ? (
              <TouchableOpacity onPress={() => authContext.logout()}>
                <Icon source={require('../../../../assets/icons/LogOut.png')} />
              </TouchableOpacity>
            ) : null}

            {search && (
              <TouchableOpacity onPress={openFilter}>
                <Icon name="search" size={28} color="white" type="EvilIcons" />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
      {!isMyAccount && (
        <PopUpFilter ref={ref} data={data} selectedSymbol={handleSelect} />
      )}
    </>
  );
};

NavHeader.propTypes = {
  type: PropTypes.oneOf([NAVHEADER_TYPE_DARK, NAVHEADER_TYPE_LIGHT]),
  progress: PropTypes.number,
  showBack: PropTypes.bool,
  showAvatar: PropTypes.bool,
  icon: PropTypes.element,
  user: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  helpModalHeading: PropTypes.string,
  helpModalContent: PropTypes.object,
  setting: PropTypes.bool,
  search: PropTypes.bool,
  isMyAccount: PropTypes.bool,
};

export default NavHeader;
