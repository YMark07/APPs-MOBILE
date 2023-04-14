import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container:{
      flex: 1,
      marginTop: 30,
    },
    titulo:{
      fontSize: 28,
      color: 'orange', 
      textAlign: 'center',
      margin:10,
    },
    pressableAdc:{
    background:'green', 
    width: 270,
    marginLeft:30,
    marginBottom:20,
    textAlign: 'center',
    },
    pressableSub:{
    background:'red', 
    width: 270,
    marginLeft:30, 
    textAlign: 'center',
    },
    texto:{
    fontSize: 50,
    color: 'white',
    },
    contador:{
    fontSize: 80, 
    color: 'red', 
    textAlign: 'center',
    margin:50,
    borderWidth: 4,
    }
  });

  export {styles};
