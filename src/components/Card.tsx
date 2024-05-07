import {PropsWithChildren} from 'react';
import {StyleSheet, Platform, View} from 'react-native';

export default function Card({children}: PropsWithChildren) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    margin: 12,
    padding: 12,
    borderWidth: 2,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
      },
      android: {
        elevation: 3,
      },
    }),
  },
});
