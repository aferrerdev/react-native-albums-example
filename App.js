// Import core libraries
import React from 'react';
import { View, Text } from 'react-native';

// Import custom components
import Header from './src/components/header';

const App = () => {
  return(
    <View>
      <Header/>
      <Text>Some text</Text>
    </View>
  );
};

export default App;