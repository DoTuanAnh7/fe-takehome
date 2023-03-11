import AsyncStorage from '@react-native-async-storage/async-storage';

export const isEnableSuperCharge = async () => {
  try {
    const superCharge = await AsyncStorage.getItem('isSuperCharged')
    return superCharge
  } catch (error) {
    console.log('Can not get super charge info', error);
  }
}