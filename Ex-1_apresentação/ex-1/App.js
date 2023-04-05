import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';


class App extends Component{
  render(){


    let nome = 'Yohan Gabriel Eduardo Queiroz dos Santos Ferreira Aquino';
    let idade = '21 anos';
    let formacao='Estudante da FATEC em ADS.';
    let experiencia='Documentação de projeto, java,APIs,PHP';
    let projeto='Criação de um site e commerce para venda de jogos';
    let img = 'https://avatars.githubusercontent.com/u/85963090?s=400&u=8d51b3cce53268bda03c690f9bda7c8a1fd9e1d6&v=4';


    return(
  
      <View style={{backgroundColor:'#848484', height:'100%'}}>
      <Text></Text>
      <Text></Text>
      <Text style={{fontSize: 25, marginLeft:'29%', color:'#04B404'}}>
      Meu perfil</Text>

       <Image
          source={{ uri: img }}
          style={{ width: 150, height: 150, marginLeft:'26%', borderRadius:200/2}}
        />

      <Text style={{fontSize: 25,margin:10,color:'#2E2EFE'}}>
      Dados pessoais:</Text>
      <Text style={{margin:10}}>Nome: {nome}</Text>
      <Text style={{margin:10}}>Idade: {idade}</Text>
    
      <Text style={{fontSize: 25, margin: 10,color:'#2E2EFE'}}>
      Formação:</Text>
      <Text style={{margin:10}}>{formacao}</Text>
      
      <Text style={{fontSize: 25, margin: 10,color:'#2E2EFE'}}>
      Experiencia:</Text>
      <Text style={{margin:10}}>{experiencia}</Text>

      <Text style={{fontSize: 25, margin: 10,color:'#2E2EFE'}}>
      Projetos:</Text>
      <Text style={{margin:10}}>{projeto}</Text>

      </View>
    )
  }
}


export default App;


