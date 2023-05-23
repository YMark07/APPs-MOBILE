import React from 'react';
import { View, Text,Pressable } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Result({route} ) {
  const navigation = useNavigation();

 return (
   <View>
   <Text style={styles.titulo}>Dados Pessoais:</Text>
     <Text style={styles.texto}>Nome: {route.params?.name}</Text>
     <Text style={styles.texto}>Idade: {route.params?.age}</Text>
     <Text style={styles.texto}>Sexo: {route.params?.sex}</Text>
     <Text style={styles.texto}>Limte: {route.params?.value}</Text>
     <Text style={styles.texto}>Nacionalidade: {route.params?.brasil}</Text>

      <Pressable style={styles.pressable}  onPress={() => navigation.goBack()}>
    <Text style={styles.texto}> Voltar para tela de cadastro </Text>
    </Pressable>

   </View>
  );
}
