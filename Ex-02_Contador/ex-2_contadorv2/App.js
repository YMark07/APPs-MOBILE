import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView} from 'react-native';
import { styles } from './styles';
 
export default function App(){
  const [valor, setValor] = useState(0)

  function adc(){
      setValor(valor+1)
  }
  function sub(){
    if(valor!=0){
    setValor(valor-1)
    }
  }
 
  return(
    <ScrollView>
      <View style={styles.container}>
        

        <Text style={styles.titulo}>
          Contador de pessoas:
        </Text>
        <Text style={styles.contador}>
          {valor}
        </Text>

        <Pressable style={styles.pressableAdc} title="+" onPress={adc}>
          <Text style={styles.texto}>+</Text>
        </Pressable>
        <Pressable style={styles.pressableSub} title="-" onPress={sub}>
          <Text style={styles.texto}>-</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}