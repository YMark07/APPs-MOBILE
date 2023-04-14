import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView} from 'react-native';
import { styles } from './styles';
 
export default function App(){
  const [num1, setN1] = useState(0)
  const [num2, setN2] = useState(0)
  const [resultado, setResultado] = useState()
  function calcular(){
    soma=parseFloat(num1)+parseFloat(num2)
    setResultado('Resultado: '+ soma)
  }
 
  return(
    <ScrollView>
      <View style={styles.container}>

      <Text style={styles.titulo}>Soma de números</Text>
      <TextInput
      style={styles.input}
      keyboardType='numeric'
      placeholder="Digite o primeiro número:"
      onChangeText={(valor) => setN1(valor)}
      />
      
      <TextInput
      style={styles.input}
      placeholder="Digite o segundo número:"
      keyboardType='numeric'
      onChangeText={ (valor) => setN2(valor)}
      />

      <Button title="Calcular" onPress={calcular} />


      <Text style={styles.texto}> {resultado} </Text>
      </View>
    </ScrollView>
  );
}
