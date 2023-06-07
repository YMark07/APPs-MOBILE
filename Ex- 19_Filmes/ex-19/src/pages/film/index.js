import React from 'react';
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles.js';
export default function Filme(props) {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titulo}>{props.data.nome}</Text>
        <TouchableOpacity onPress={() => 
        navigation.navigate('details', {nome: props.data.nome,
        sinopse: props.data.sinopse})}>
              <Image
        source={{uri: props.data.foto}}
        style={styles.foto}
      />        
      </TouchableOpacity>
      </View>
    </View>
    
  );
}