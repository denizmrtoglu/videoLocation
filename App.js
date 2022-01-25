import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';
import Map from './src/components/map';
import VideoList from './src/components/videos';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        <View style={{ width: '100%', flex: 0.3 }}>
          <Map />
        </View>
        <View style={{ width: '100%', flex: 0.7 }}>
          <VideoList />
        </View>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
