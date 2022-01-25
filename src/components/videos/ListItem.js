import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import moment from 'moment';

const ListItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: item.snippet.thumbnails.high.url,
        }}
      />
      <View style={styles.description}>
        <Text style={styles.title} numberOfLines={2}>
          {item.snippet.title}
        </Text>
        <Text style={styles.channelName} numberOfLines={2}>
          {`${item.snippet.channelTitle} • ${moment(
            new Date(item.snippet.publishTime),
          ).fromNow()}`}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 343 / 193,
  },
  container: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  description: {
    width: '100%',
    padding: 10,
  },
  title: { fontSize: 14 },
  channelName: { fontSize: 12, color: '#030303', opacity: 0.6 },
});

export default ListItem;
