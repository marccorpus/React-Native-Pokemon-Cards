import {StyleSheet, View, Text} from 'react-native';

interface NameProps {
  name: string;
  hp: number;
}

export default function Name({name, hp}: NameProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.hp}>♥️{hp}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
  },
  hp: {
    fontSize: 16,
  },
});
