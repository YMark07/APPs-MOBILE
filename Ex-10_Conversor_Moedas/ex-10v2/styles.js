import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container:{
      flex: 1,
      marginTop: 30,
    },
    input:{
      height: 35,
      borderWidth: 1,
      borderColor: '#222',
      marginLeft: 15,
      marginRight: 15,
      marginBottom: 15,
      fontSize: 14,
      padding: 10,
    },
    texto:{
      textAlign: 'center',
      fontSize: 25,
      padding: 10,
      marginTop: 5,
    },
    resultado:{
      textAlign: 'center',
      fontSize: 25,
      padding: 10,
      marginTop: 5,
      color: 'green'
    },
    titulo:{
      fontSize: 18,
      color: 'red',
      alignSelf: 'center',
      marginTop: 15
    },
    label:{
      margin: 5,
      fontSize: 12,
      marginLeft: 15,
    },
  });


  export {styles};
