// FlatListSolution.js
import React, { useMemo } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const data = Array.from({ length: 1000 }, (_, i) => ({ id: i, text: `Item ${i}` }));

const Item = ({ item }) => (
  <View style={styles.item}>
    <Text>{item.text}</Text>
  </View>
);

const FlatListSolution = () => {
  const memoizedData = useMemo(() => data, []); // Memoize the data

  return (
    <FlatList
      data={memoizedData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Item item={item} />}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      removeClippedSubviews={true} // Optimize for large lists
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
  },
});

export default FlatListSolution;