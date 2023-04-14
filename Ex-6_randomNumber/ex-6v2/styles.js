import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 35,
    fontSize: 20,
    padding: 10,
  },
  resultado:{
    margin: 25,
    textAlign: 'center',
    fontSize: 25,
    color: '#FF0000'
  },
    texto:{
    textAlign: 'center',
    fontSize: 25,
  },
  titulo:{
  textAlign: 'center',
  fontSize: 25,
  margin: 35
  
  },
  img:{
    margin: 25,
  width: 250 , 
  height:250,   
  },
  pressable:{
    width: 250,
    height: 50,
    margin: 35,
    backgroundColor: 'green',
  }
})

export {styles}