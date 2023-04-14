import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  image:{
    width: 70, 
    height: 80
  },
    container:{
      flex: 1,
      backgroundColor:'white',      
      borderWidth : 1,
      
    },
    tabela:{

      borderColor : 'white',        
      borderWidth : 1 
    },
    box:{
      width: 'auto', 
      height: 200,
      padding:10,
      borderColor : '#000',        
      borderWidth : 1,
      borderRadius:5,
      
    },
    texto:{
      textAlign: 'left',
      fontSize: 18,
      
    },
    titulo:{
      color: 'red',
      textAlign: 'center',
      fontSize: 35,
      padding:5,
    },
    titulo2:{
      color: 'blue',
      fontSize: 25,
    },
  })


export {styles};