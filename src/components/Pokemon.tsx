import {StyleSheet, Image} from 'react-native';

import Card from './Card';
import Name from './Name';
import Type from './Type';
import Attributes from './Attributes';

interface PokemonProps {
  name: string;
  image: any;
  type: string;
  hp: number;
  moves: string[];
  weaknesses: string[];
}

export default function Pokemon({
  name,
  image,
  type,
  hp,
  moves,
  weaknesses,
}: PokemonProps) {
  return (
    <Card>
      <Name name={name} hp={hp} />

      <Image style={styles.image} source={image} resizeMode="contain" />

      <Type type={type} />

      <Attributes label="Moves" attributes={moves} />

      <Attributes label="Weaknesses" attributes={weaknesses} />
    </Card>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
});
