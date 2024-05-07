import {StyleSheet, View, Text} from 'react-native';

interface AttributesProps {
  label: string;
  attributes: string[];
}

export default function Attributes({label, attributes}: AttributesProps) {
  return (
    <View style={styles.container}>
      <Text>
        {label}: <Text style={styles.attributes}>{attributes.join(', ')}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  attributes: {
    fontWeight: '600',
  },
});
