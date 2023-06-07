import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles.js';
export default function Details({route}) {
 return (
   <View>
     <Text style={styles.titulo}>{route.params?.nome}</Text>
     <Text style={styles.texto}>Sinopse: {route.params?.sinopse}</Text>
   </View>
  );
}