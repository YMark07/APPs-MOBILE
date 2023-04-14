import React, { useState } from 'react';
import { View, Text, Pressable, TextInput,Image,ScrollView} from 'react-native';
import {styles} from './styles';


function Img() {  
let img='data:image/png;base64,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';
    return(
        <Image
        source={{ uri: img }}
        style={{ width: 290 , height:290 }}
      />
    )
}
export default function App(){
  const [resultado, setResultado] = useState()
  const [peso, setPeso] = useState()
  const [altura, setAltura] = useState()


  function calcular() {
        if (this.state.peso === ''||this.state.altura === ''){
      alert('Digite os valores!')
      return;
    }
    calculo= parseFloat(peso) / (parseFloat(altura)*parseFloat(altura))
    if(calculo<18.5){
    setResultado('Abaixo do peso')
    }
    else{
      if(calculo>40){
      setResultado( 'Obeso Grau III')
      }
      else{
        if(calculo>18.5 &&calculo<24.9){
        setResultado('Peso Normal')
        } 
          else{
            if(calculo>25 &&calculo<29.9){
            setResultado('Sobrepeso')
            }
            else{
              if(calculo>30 &&calculo<34.9){
              setResultado('Obeso Grau I')
              }
              else{
              setResultado('Obeso Grau II')
              }
            }
          }
      }
    }
  }


  return(
     <ScrollView>
    <View style={styles.container}>
    
    <Img/>

    <TextInput
      style={styles.input}
      keyboardType='numeric'
      placeholder="Digite o peso"
      onChangeText={ (valor) => setPeso(valor)}
      />
      
      <TextInput
      style={styles.input}
      placeholder="Digite a altura"
      keyboardType='numeric'
      onChangeText={ (valor) => setAltura(valor)}
      />

      <Pressable style={styles.pressable}  onPress={calcular}>
    <Text style={styles.texto}> calcular </Text>
    </Pressable>

      <Text style={styles.resultado}>
        {resultado}
      </Text>

    </View>
    </ScrollView>
  )
}
