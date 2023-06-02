import React, { useState } from 'react'
import {View, Text, Button, TextInput,Pressable} from 'react-native'
import api from './src/services/api'
import { styles } from './src/styles/styles.js';

export default function App(){
  const [cep, setCep] = useState()
  const [endereco, setEndereco] = useState()


  const consultaCep = async (cep) => {
    const response = await api.get('/' + cep + '/json/');
    setEndereco(response.data)
  }


    return(
      <View style={styles.container}>
        <TextInput
        style={styles.cep}
        value={cep}
        onChangeText={(texto) => setCep(texto)}
        underlineColorAndroid="transparent"
        keyboardType='numeric'
        />
        
        <Pressable style={styles.pressable}  onPress={()=>consultaCep(cep)}>
    <Text style={styles.texto}> Consultar Cep </Text>
    </Pressable>

        <Text style={styles.endereco}>CEP:{endereco?.cep}</Text>
        <Text style={styles.endereco}>Logradouro:{endereco?.logradouro}</Text>
        <Text style={styles.endereco}>Bairro:{endereco?.bairro}</Text>
        <Text style={styles.endereco}>Cidade:{endereco?.localidade}</Text>
        <Text style={styles.endereco}>Estado:{endereco?.uf}</Text>

      </View> 
         
    )
  }
