import React, { useState } from 'react';
import { View, Text, ScrollView,Image } from 'react-native';
import { styles } from '../../styles/styles';

export default function Formacao() {
  const [medio] = useState('Ensino medio: Federal de cubatão')
  const [superior] = useState('Ensino superior:FATEC Praia Grande')
 
  return(
    <ScrollView style={styles.container}>
      <View>

      <Text style={styles.titulo}>
      Dados pessoais:</Text>
      <Text style={styles.texto}>{medio}</Text>
      <Text style={styles.texto}>{superior}</Text>    

      </View>
  
    </ScrollView>
  );
}