import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  image:{
    width: 70, 
    height: 80
  },
    container:{
      flex: 1,
      backgroundColor:'#000',
      borderColor : 'white',        
      borderWidth : 1,
      
    },
    tabela:{
     backgroundColor:'#000',
      borderColor : 'white',        
      borderWidth : 1 
    },
    box:{
      width: 100, 
      height: 277,
      textAlign: 'center',
      alignItems:'center',
      flex: 1,
      padding:20,
      backgroundColor:'#000',
      borderColor : 'white',        
      borderWidth : 1,
      borderRadius:15,
      
    },
    texto:{
      color: '#FFF',
      textAlign: 'center',
      fontSize: 14,
      
    },
    titulo:{
      color: 'red',
      textAlign: 'center',
      fontSize: 25,
      padding:5,
    },
  })


export {styles};