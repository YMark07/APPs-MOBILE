import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, TextInput, Button, FlatList } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("compras.db");


const App = () => {
  const [nome, setNome] = useState("");
  const [qtd, setQtd] = useState("");
  const [itens, setItens] = useState([]);

  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS compras (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(20), qtd NUMBER(10,2))`,
        [],
        (sqlTxn, res) => {
          console.log("Tabela criada com sucesso!");
        },
        error => {
          console.log("error on creating table " + error.message);
        },
      );
    });
  };


  const incluirItem = () => {
    if (!nome||!qtd) {
      alert("Informe um item e quantidade");
      return false;
    }

    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO compras (nome, qtd) VALUES (?, ?)`,
        [nome,qtd],
        (sqlTxn, res) => {
          console.log(`${nome} Item adicionado com sucesso!`);
          getCompras();
          setNome("");
          setQtd("");
        },
        error => {
          console.log("Erro ao inserir um item " + error.message);
        },
      );
    });
  };


  const getCompras = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM compras ORDER BY id DESC`,
        [],
        (sqlTxn, res) => {
          console.log("itens lidos com sucesso!");
          let len = res.rows.length;


          if (len >= 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({id: item.id,nome: item.nome, qtd: item.qtd });
            }
            setItens(results);
          }
        },
        error => {
          console.log("Erro ao obter os itens " + error.message);
        },
      );
    });
  };
  
  const delItem = (id) =>{
    db.transaction(txn => {
      txn.executeSql(
        `DELETE FROM compras WHERE id=?`,
        [id],
        (sqlTxn, res) => {
          console.log("item deletado com sucesso!");
        },
        error => {
          console.log("Erro:" + error.message);
        },
      );
      getCompras();
    });
  }

  const renderCompras= ({ item }) => {
    return (
      <View style={{
        flexDirection: "row",
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: "#ddd",
      }}>
        <Text style={{ marginRight: 9 }}>{item.nome}</Text>
        <Text>{item.qtd}</Text>
        <MaterialIcons name="delete" size={24} color="black" onPress={() => delItem(item.id)}/>

      </View>
    );
  };


  useEffect(async () => {
    await createTables();
    await getCompras();
  }, []);


  return (
    <View>
      <StatusBar backgroundColor="#222" />
      
      <Text style={{ marginRight: 9,    fontSize: 28,marginTop: 40,}}>Lista de compras</Text>

      <TextInput
        placeholder="Informe um item"
        value={nome}
        onChangeText={setNome}
        style={{ marginHorizontal: 8, marginTop: 50 }}
      />
      <TextInput
        placeholder="Informe a quantidade"
        value={qtd}
        onChangeText={setQtd}
        style={{ marginHorizontal: 8, marginTop: 50 }}
      />

      <Button title="Salvar" onPress={incluirItem} />

      <FlatList
        data={itens}
        renderItem={renderCompras}
        key={t => t.id} 
      />
    </View>
  );
};


export default App;
