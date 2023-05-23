import React, { useState } from 'react';
import { View, Text, ScrollView,Image } from 'react-native';
import { styles } from '../../styles/styles';
 
 function Img(){
    let img = 'https://avatars.githubusercontent.com/u/85963090?s=400&u=8d51b3cce53268bda03c690f9bda7c8a1fd9e1d6&v=4'; 


    return(
      <View>  
        <Image
        source={{ uri: img }}
        style={{ width: 150, height: 150, marginLeft:'26%', borderRadius:200/2}}
        />
      </View>
    )
}


export default function Pessoal() {
  const [nome] = useState('Yohan Gabriel Eduardo Queiroz dos Santos Ferreira Aquino')
  const [idade] = useState('22 anos')
  const [git] = useState('https://github.com/YMark07/')
 
  return(
    <ScrollView style={styles.container}>
      <View>
      <Text style={styles.titulo}>
      Meu perfil</Text>
       <Img/>

      <Text style={styles.subtitulo}>
      Dados pessoais:</Text>
      <Text style={styles.texto}>Nome: {nome}</Text>
      <Text style={styles.texto}>Idade: {idade}</Text>    
      <Text style={styles.texto}>Github: {git}</Text>

      </View>
  
    </ScrollView>
  );
}