import React, { useState } from 'react';
import { View, Text, ScrollView,Image } from 'react-native';
import { styles } from '../../styles/styles';

export default function Formacao() {
  const [estagio] = useState('Prefeitura de praia grande')

 
  return(
    <ScrollView style={styles.container}>
      <View>

      <Text style={styles.titulo}>
      Estagios:</Text>
      <Text style={styles.texto}>{estagio}</Text>   

      </View>
  
    </ScrollView>
  );
}