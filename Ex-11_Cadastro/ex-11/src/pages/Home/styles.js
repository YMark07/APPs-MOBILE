import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  input:{
    height: 45,
    width: '40%' ,
    borderWidth: 1,
    borderColor: '#222',
    backgroundColor: 'white',
    margin: 5,
    fontSize: 20,
    padding: 10,
  },
  resultado:{
    textAlign: 'center',
    fontSize: 25,
    color: '#FF0000'
  },
    texto:{
    fontSize: 22,
  },
  titulo:{
  textAlign: 'center',
  fontSize: 25,
  margin: 35
  
  },
  img:{
  width: 300 , 
  height:290,
     
  },
  pressable:{
    width: 250,
    height: 50,
    margin: 35,
    backgroundColor: 'green',
  },
  campoNome:{
    flexDirection: 'row'
  }
},
)

export {styles}