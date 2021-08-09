import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import FavoritesEmptyState from './FavoritesEmptyState';
import Colors from '../../res/colors';

function FavoritesScreen() {
  

  return (
    <View style={styles.container}>
      <FavoritesEmptyState />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.charade,
    flex: 1,
  },
});

export default FavoritesScreen;