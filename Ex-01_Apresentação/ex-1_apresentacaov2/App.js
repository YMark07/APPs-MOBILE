import React, { useState } from 'react';
import { View, Text, ScrollView,Image} from 'react-native';
import { styles } from './styles';
 
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

export default function App(){
  const [nome] = useState('Yohan Gabriel Eduardo Queiroz dos Santos Ferreira Aquino')
  const [idade] = useState('21 anos')
  const [formacao] = useState('Estudante da FATEC em ADS.')
  const [experiencia]=useState('Documentação de projeto, java,APIs,PHP,React')
  const [projeto] =useState('Criação de um site e commerce para venda de jogos') 
 
  return(
    <ScrollView>
      <View style={styles.container}>
      <Text style={styles.titulo}>
      Meu perfil</Text>

       <Img/>

      <Text style={styles.subtitulo}>
      Dados pessoais:</Text>
      <Text style={styles.texto}>Nome: {nome}</Text>
      <Text style={styles.texto}>Idade: {idade}</Text>
    
      <Text style={styles.subtitulo}>
      Formação:</Text>
      <Text style={styles.texto}>{formacao}</Text>
      
      <Text style={styles.subtitulo}>
      Experiencia:</Text>
      <Text style={styles.texto}>{experiencia}</Text>

      <Text style={styles.subtitulo}>
      Projetos:</Text>
      <Text style={styles.texto}>{projeto}</Text>
      
      </View>
  
    </ScrollView>
  );
}
