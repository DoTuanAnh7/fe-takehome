import React from 'react';
import { LogBox, Platform, Text, TextInput } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

import Navigation from './app/navigation';


LogBox.ignoreAllLogs();

function App() :JSX.Element {

  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}

export default App;

