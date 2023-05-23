import { View, Text, ScrollView, Image} from 'react-native';
import { styles } from './styles';

 
export default function App(){

  function Img(){
    let img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHk5hs7_15gRujKGiXSofMncxf-wxs7VikJw&usqp=CAU';
    return(
      <Image 
      source={{uri:img}}
      style={styles.image}
      />
    )
  }
  function Img2(){
    let img = 'data:image/jpeg;base64,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';
    return(
      <Image 
      source={{uri:img}}
      style={styles.image}
      />
    )
  }

  function Img3(){
    let img = 'https://images.squarespace-cdn.com/content/v1/5e6a52644e433409c3c4031e/1599840357608-0ZD5QKHTX4AJAFE57OXT/Pizza+de+Portuguesa';
    return(
      <Image 
      source={{uri:img}}
      style={styles.image}
      />
    )
  }

  function Img4(){
    let img = 'https://tpaempreendimentos.com.br/blog/wp-content/uploads/2019/02/shutterstock-84904912-1024x683.jpg';
    return(
      <Image 
      source={{uri:img}}
      style={styles.image}
      />
    )
  }

  function Img5(){
    let img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzx_tNSze7Yhf5smqvXvCQMaZHk9GLGrfQRg&usqp=CAU';
    return(
      <Image 
      source={{uri:img}}
      style={styles.image}
      />
    )
  }
 
  return(
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.titulo}> Pizzas: </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          
          <View style={styles.box}>
          <Img/>
        <Text style={styles.texto}> 4 Queijos </Text>
          </View>
            
         <View style={styles.box}>
          <Img2/>
        <Text style={styles.texto}> Queijo simples </Text>
          </View>

          <View style={styles.box}>
          <Img3/>
        <Text style={styles.texto}> Portuguesa </Text>
          </View>

          <View style={styles.box}>
          <Img4/>
        <Text style={styles.texto}> Especial da casa </Text>
          </View>

          <View style={styles.box}>
          <Img5/>
        <Text style={styles.texto}> Atum </Text>
          </View> 
        </ScrollView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          
          <View style={styles.box}>
          <Img/>
        <Text style={styles.texto}> 4 Queijos </Text>
          </View>
            
         <View style={styles.box}>
          <Img2/>
        <Text style={styles.texto}> Queijo simples </Text>
          </View>

          <View style={styles.box}>
          <Img3/>
        <Text style={styles.texto}> Portuguesa </Text>
          </View>

          <View style={styles.box}>
          <Img4/>
        <Text style={styles.texto}> Especial da casa </Text>
          </View>

          <View style={styles.box}>
          <Img5/>
        <Text style={styles.texto}> Atum </Text>
          </View> 
        </ScrollView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          
          <View style={styles.box}>
          <Img/>
        <Text style={styles.texto}> 4 Queijos </Text>
          </View>
            
         <View style={styles.box}>
          <Img2/>
        <Text style={styles.texto}> Queijo simples </Text>
          </View>

          <View style={styles.box}>
          <Img3/>
        <Text style={styles.texto}> Portuguesa </Text>
          </View>

          <View style={styles.box}>
          <Img4/>
        <Text style={styles.texto}> Especial da casa </Text>
          </View>

          <View style={styles.box}>
          <Img5/>
        <Text style={styles.texto}> Atum </Text>
          </View> 
        </ScrollView>        
      </View>
    </ScrollView>
  );
}
