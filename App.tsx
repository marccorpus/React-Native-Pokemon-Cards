import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  FlatList,
} from 'react-native';

import Pokemon from './src/components/Pokemon';

import data from './src/data/pokemon';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={data} renderItem={({item}) => <Pokemon {...item} />} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
