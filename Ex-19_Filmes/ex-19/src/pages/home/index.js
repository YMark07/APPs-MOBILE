import React, {useState, useEffect} from 'react';
import { View, FlatList } from 'react-native';
import api from '../../services/api';
import Filme from '../film';

export default function Home(){
   const [infoFilmes, setInfoFilmes] = useState([])

  useEffect( () => {
      consultarFilmes();
  }, []);

  const consultarFilmes = async () => {
      const response = await api.get('/');
      setInfoFilmes(response.data)
  }
  return(
    <View>
      <FlatList
        data={infoFilmes}
        key={(item) => item.id}
        renderItem={({item}) => <Filme data={item}/>}
      />

    </View>
  )
}