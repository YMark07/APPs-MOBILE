import React, { useState } from 'react';
import { View, Text,Image, TextInput, Pressable,ScrollView} from 'react-native';
import {styles} from './styles';

function Img(){
  let img = 'https://blog.autobitts.com.br/wp-content/uploads/2017/12/ab-bomba-de-gasolina.jpg';
  return(
<Image 
      source={{uri:img}}
      style={styles.img}
      />
  )
}

export default function App(){
const [alcool, setAlcool] = useState()
const [gasolina, setGasolina] = useState()  
const [resultado,setResultado] = useState()
  
function verificar(){
    calculo= parseFloat(alcool) / parseFloat(gasolina);
    if(calculo<0.7){
    setResultado('Resultado: Alcool é melhor');
    }else{
    setResultado('Resultado: Gasolina é melhor');
    }
    
  }
    
    return(
      <ScrollView>
      <View>
      <Text style={styles.titulo}>Alcool ou Gasolina</Text>
      <Img/>
      <TextInput
      style={styles.input}
      keyboardType='numeric'
      placeholder="Digite o preço do Alcool"
      onChangeText={(valor) => setAlcool(valor)}
      />
      
      <TextInput
      style={styles.input}
      placeholder="Digite o preço da Gasolina"
      keyboardType='numeric'
      onChangeText={(valor) => setGasolina(valor)}
      />

      <Pressable style={styles.pressable}  onPress={verificar}>
    <Text style={styles.texto}> Verificar </Text>
    </Pressable>

      <Text style={styles.resultado}> {resultado} </Text>
      </View>
      </ScrollView>
    );}
