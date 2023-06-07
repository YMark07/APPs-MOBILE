import React, { useState } from 'react'
import {View, Text, StyleSheet, Button, TextInput, Image} from 'react-native'
import api from './src/services/api';
import { styles } from './src/styles/styles.js';

export default function App(){
  const [loginDev, setLoginDev] = useState()
  const [infoDev, setInfoDev] = useState([])
  const [fotoDev, setFotoDev] = useState('https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png')

    const consulDev = async (loginDev) => {
      const response = await api.get('/' + loginDev);
      setInfoDev(response.data)
      setFotoDev(response.data.avatar_url)
    }

    return(
      <View style={styles.container}>
        <Image
          style={styles.foto}
          source={{uri: fotoDev}}
        />

        <View style={styles.busca}>
          <TextInput
          style={styles.texto}
          value={loginDev}
          onChangeText={setLoginDev}
          underlineColorAndroid="transparent"
          />

          <Button title="OK" onPress={() => consulDev(loginDev)} />
        </View>

        <Text style={styles.info}>Id: {infoDev?.id}</Text>
        <Text style={styles.info}>Nome: {infoDev?.name}</Text>
        <Text style={styles.info}>Repositórios: {infoDev?.public_repos}</Text>
        <Text style={styles.info}>Criado em: {infoDev?.created_at}</Text>
        <Text style={styles.info}>Seguidores: {infoDev?.followers}</Text>
        <Text style={styles.info}>Seguindo: {infoDev?.following}</Text>
      </View>    
    )
  };
