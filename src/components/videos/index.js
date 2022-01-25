import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getVideosRequest } from '../../store/videos/videosAction';
import ListItem from './ListItem';

const VideoList = () => {
  const dispatch = useDispatch();
  const { videoList, coordinate } = useSelector((state) => state);

  //sends a request when the coordinate changes
  useEffect(() => {
    dispatch(getVideosRequest());
  }, [coordinate]);

  const renderItem = ({ item }) => <ListItem item={item} />;
  const emptyList = () => (
    <View style={styles.emptyContainer}>
      <Text style={{ fontSize: 16 }}>No Data</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={videoList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.videoId}
        ListEmptyComponent={() => emptyList()}
        onEndReached={() => dispatch(getVideosRequest())}
        onEndReachedThreshold={0.2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 200,
  },
});

export default VideoList;
