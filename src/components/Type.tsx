import {StyleSheet, View, Text} from 'react-native';

import {getTypeDetails} from '../utils/helper';

interface TypeProps {
  type: string;
}

export default function Type({type}: TypeProps) {
  const {borderColor, emoji} = getTypeDetails(type);

  return (
    <View style={[styles.container, {borderColor}]}>
      <Text style={styles.type}>
        {emoji} {type}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderRadius: 16,
    padding: 12,
    alignSelf: 'center',
    marginBottom: 16,
  },
  type: {
    fontSize: 18,
  },
});
