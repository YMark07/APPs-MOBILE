import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView} from 'react-native';
import { styles } from './styles';
import {Picker} from '@react-native-picker/picker';
 
export default function App(){
  const [valor, setValor] = useState(0)
  const [de, setDe] = useState('Real')
  const [para, setPara] = useState('Dolar')
  const [resultado, setResultado] = useState()

  function Converter(){
    if((de=='Real'&&para=='Real')||(de=='Dolar'&&para=='Dolar')||(de=='Euro'&&para=='Euro')){
       vc=valor
       }
    else{
     switch(de){
       case 'Real':
       if(para=='Dolar'){
       vc=valor*0.2
       }
       else{
       vc=valor*0.18
       }
       break;
       case 'Dolar':
       if(para=='Real'){
       vc=valor*5
       }
       else{
       vc=valor*0.9
       }
       break;
       case 'Euro':
       if(para=='Dolar'){
       vc=valor*1.1
       }
       else{
       vc=valor*5.5
       }
       break;
     }
     }

    setResultado('O valor é '+ vc)
  }
 
  return(
    <ScrollView>
      <View style={styles.container}>

        <Text style={styles.titulo}>Conversor de moeda: Dolar, Euro e Real</Text>

        <Text style={styles.label}>Valor:         
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          onChangeText={(valor) => setValor(valor)}
          
        /></Text>

        <Text style={styles.label}>De:
        <Picker
          selectedValue={de}
          onValueChange={ (itemValue) => setDe(itemValue) }
        >
          <Picker.Item  value='Dolar' label="Dolar" />
          <Picker.Item  value='Euro' label="Euro" />
          <Picker.Item  value='Real' label="Real" />
        </Picker>
        </Text>
        
        <Text style={styles.label}>Para:
        <Picker
          selectedValue={para}
          onValueChange={ (itemValue) => setPara(itemValue) }
        >
          <Picker.Item  value='Dolar' label="Dolar" />
          <Picker.Item  value='Euro' label="Euro" />
          <Picker.Item  value='Real' label="Real" />
        </Picker>
        </Text>

        <Button title="Converter" onPress={Converter} />
  
        <Text style={styles.resultado}> {resultado} </Text>
      </View>
    </ScrollView>
  );
}