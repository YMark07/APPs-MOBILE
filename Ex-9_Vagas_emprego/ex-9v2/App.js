import { View, Text, ScrollView} from 'react-native';
import { styles } from './styles';

 
export default function App(){

  function Empregos(){
    return(
    <ScrollView>
          <View style={styles.box}>

        <Text style={styles.titulo2}> 
        Desenvolvedor de Backend
        </Text>
        <Text style={styles.texto}> 
        Salário:$6000,00
        </Text>
        <Text style={styles.texto}> 
        Descrição:remoto, necessita de conhecimento sobre php,javascript.
        </Text>
        <Text style={styles.texto}> 
        Contato:emprego1@gmail.com
        </Text>
          </View>
            
         <View style={styles.box}>

        <Text style={styles.titulo2}> 
        Engenheiro de dados
        </Text>
        <Text style={styles.texto}> 
        Salário:$3500,00
        </Text>
        <Text style={styles.texto}> 
        Descrição:Necessita de experiência prévia
        </Text>
        <Text style={styles.texto}> 
        Contato:emprego2@gmail.com
        </Text>
          </View>

          <View style={styles.box}>

        <Text style={styles.titulo2}> 
        Engenheiro de requisitos
        </Text>
        <Text style={styles.texto}> 
        Salário:$3800,00
        </Text>
        <Text style={styles.texto}> 
        Descrição:Nesessita de experiência prévia
        </Text>
        <Text style={styles.texto}> 
        Contato:emprego3@gmail.com
        </Text>
          </View>

          <View style={styles.box}>

        <Text style={styles.titulo2}> 
        Desenvolvedor de Frontend
        </Text>
        <Text style={styles.texto}> 
        Salário:$3200,00
        </Text>
        <Text style={styles.texto}> 
        Descrição:Necessita de experiência prévia
        </Text>
        <Text style={styles.texto}> 
        Contato:emprego4@gmail.com
        </Text>
          </View>

          <View style={styles.box}>
        <Text style={styles.titulo2}> 
        Analista de sistemas
        </Text>
        <Text style={styles.texto}> 
        Salário:$3300,00
        </Text>
        <Text style={styles.texto}> 
        Descrição:Necessita de experiência prévia
        </Text>
        <Text style={styles.texto}> 
        Contato:emprego5@gmail.com
        </Text>
          </View> 
        </ScrollView>)
  }
  return(
    <ScrollView>
    <Text style={styles.titulo}> Vagas:</Text>
      <View style={styles.container}>
      <Empregos/>
      </View>
    </ScrollView>
  );
}
