import React from 'react';
import { Image, StyleSheet } from 'react-native';
import MapView, { MarkerAnimated, PROVIDER_GOOGLE } from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';
import { tmobIcon } from '../../assets/tmob.png';
import { changeLocation } from '../../store/videos/videosAction';

const Map = () => {
  const dispatch = useDispatch();
  const coordinate = useSelector((state) => state.coordinate);

  const initialRegion = {
    latitude: 41.0201903,
    longitude: 28.8866112,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      initialRegion={initialRegion}
      onPress={(e) => dispatch(changeLocation(e.nativeEvent.coordinate))}
    >
      <MarkerAnimated draggable coordinate={coordinate} image={tmobIcon}>
        <Image style={styles.pin} source={require('../../assets/tmob.png')} />
      </MarkerAnimated>
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: { width: '100%', flex: 1 },
  pin: { width: 27, height: 41 },
});

export default Map;
