import React, { useState } from 'react';
import { View, Text, TextInput, Switch, ScrollView, Pressable} from 'react-native';
import { styles } from './styles';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';
 
export default function App(){
  const navigation = useNavigation();

  const [nome, setNome] = useState()
  const [idade, setIdade] = useState(0)
  const [valor, setValor] = useState(0)
  const [brasileiro, setBrasileiro] = useState(false)
  const [sexo] = useState('Masculino')

  
  function cadastrar(){
     navigation.navigate('Result', { name: nome, age: idade ,sex: sexo,
     value:valor, brasil:((brasileiro) ? 'Brasileiro' : 'Estrageiro')});     
  }
 
  return(
    <ScrollView>
    <View>

      <Text style={styles.titulo}>Abertura de conta</Text>

      <Text style={styles.texto}>Nome:<TextInput
      style={styles.input}
      keyboardType='text'
      onChangeText={(texto) => setNome(texto)}
      /></Text>

      <Text style={styles.texto}>Idade:
      <TextInput
      style={styles.input}
      keyboardType='numeric'
      onChangeText={ (valor) => setIdade(valor)}
      /></Text>

      <Text style={styles.texto}>Sexo:
      <Picker
      selectedValue={sexo}
      onValueChange={ (itemValue) => setDe(itemValue) }
        >
          <Picker.Item  value='Masculino' label="Masculino" />
          <Picker.Item  value='Feminino' label="Feminino" />
          <Picker.Item  value='Outros' label="Outros" />
        </Picker>
      </Text>
 
      <Text style={styles.texto}>Limite: 
</Text><Slider
      minimumValue={0}
      maximumValue={1000}
      step={100}
      onValueChange={ (valorSelecionado) => setValor(valorSelecionado)}
      value={valor}    />
      <Text style={{textAlign: 'center', fontSize: 30}}>
      {valor.toFixed(0)}
    </Text>

    <Text style={styles.texto}>Brasileiro: <Switch 
      value={brasileiro}
      onValueChange={ (valorSwitch) => setBrasileiro(valorSwitch)}
      />
</Text> 

      <Pressable style={styles.pressable}  onPress={cadastrar}>
    <Text style={styles.texto}> Confirmar </Text>
    </Pressable>
      </View>
    </ScrollView>
  );
}