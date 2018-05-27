// Import core libraries
import React from 'react';
import { View, Text } from 'react-native';

// Import custom components
import Header from './src/components/header';
import AlbumList from './src/components/album-list';

const App = () => {
  return(
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums!'} />
      <AlbumList />
    </View>
  );
};

export default App;