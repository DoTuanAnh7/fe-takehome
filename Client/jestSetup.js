import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import mockPermissions from 'react-native-permissions/mock';
import mockRNDeviceInfo from 'react-native-device-info/jest/react-native-device-info-mock';
import mockNotifee from '@notifee/react-native/jest-mock';
import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock.js';
jest.useFakeTimers();
jest.autoMockOff();

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
jest.mock('react-native-permissions', () => mockPermissions);
jest.mock('react-native-fbsdk-next', () => require('react-native-fbsdk-next/jest/mocks').default);
jest.mock('react-native-device-info', () => mockRNDeviceInfo);
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock('@notifee/react-native', () => mockNotifee);
jest.mock('@intercom/intercom-react-native', () => jest.fn());
jest.mock('@react-navigation/native', () => ({
  useIsFocused: jest.fn(),
}));
jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);
jest.mock('react-native-keychain', () => ({
  ACCESS_CONTROL: {
    USER_PRESENCE: 'UserPresence',
    BIOMETRY_ANY: 'BiometryAny',
    BIOMETRY_CURRENT_SET: 'BiometryCurrentSet',
    DEVICE_PASSCODE: 'DevicePasscode',
    APPLICATION_PASSWORD: 'ApplicationPassword',
    BIOMETRY_ANY_OR_DEVICE_PASSCODE: 'BiometryAnyOrDevicePasscode',
    BIOMETRY_CURRENT_SET_OR_DEVICE_PASSCODE: 'BiometryCurrentSetOrDevicePasscode',
  },
  ACCESSIBLE: {
    WHEN_UNLOCKED: 'AccessibleWhenUnlocked',
    AFTER_FIRST_UNLOCK: 'AccessibleAfterFirstUnlock',
    ALWAYS: 'AccessibleAlways',
    WHEN_PASSCODE_SET_THIS_DEVICE_ONLY: 'AccessibleWhenPasscodeSetThisDeviceOnly',
    WHEN_UNLOCKED_THIS_DEVICE_ONLY: 'AccessibleWhenUnlockedThisDeviceOnly',
    AFTER_FIRST_UNLOCK_THIS_DEVICE_ONLY: 'AccessibleAfterFirstUnlockThisDeviceOnly',
    ALWAYS_THIS_DEVICE_ONLY: 'AccessibleAlwaysThisDeviceOnly',
  },
  SECURITY_LEVEL: {
    SECURE_SOFTWARE: "SECURE_SOFTWARE",
    SECURE_HARDWARE: "SECURE_HARDWARE",
    ANY: "ANY",
  },
  setGenericPassword: jest.fn().mockResolvedValue(),
  getGenericPassword: jest.fn().mockResolvedValue(),
  setInternetCredentials: jest.fn().mockResolvedValue(),
  resetGenericPassword: jest.fn().mockResolvedValue(),
  resetInternetCredentials: jest.fn().mockResolvedValue(),
}));

require('react-native-reanimated/lib/reanimated2/jestUtils').setUpTests();

global.navigator = {
  ClientDevice_Browser: jest.fn().mockImplementation(() => Promise.resolve()),
};