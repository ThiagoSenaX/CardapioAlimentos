import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Image} from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Manrope_200ExtraLight,
  Manrope_300Light,
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
  Manrope_700Bold,
  Manrope_800ExtraBold,
} from '@expo-google-fonts/manrope';

export default function App() {
  
  let [fontsLoaded] = useFonts({
    Manrope_200ExtraLight,
    Manrope_300Light,
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
    Manrope_800ExtraBold,
  });
  
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

  return(
  <View style={estilo.container}>
    <Text style={estilo.titulo}>Cardápio</Text>
    <FlatList
    data={Dadoshamburguers}
    keyExtractor={(item)=>{item.uid.toString()}}
    renderItem={({item})=>
    <View style={estilo.blocos}>
      <View>
        <Image resizeMode={''} style={estilo.img} source={{uri:item.img}} />
      </View>
      
      <View>
        <Text style={estilo.txttitulo}> {item.hamburguer} </Text>
        <Text style={estilo.txtdesc}> {item.descricao} </Text>
        <Text style={estilo.txtvalor}> {item.valor} </Text>
      </View>

    </View>
    
    }
    />

    </View>
    );
  }
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFA500',
    marginTop: 30,
    padding: 10
  },
  img:{
    width:130,
    height:120,
    borderWidth: 2,
    borderColor: '#000089',
    borderTopLeftRadius: 9,
    borderBottomLeftRadius: 9
  },
  blocos:{
    flexDirection: 'row',
    backgroundColor: '#000089',
    width:'100%',
    height: 120,
    marginVertical: 8,
    borderRadius: 10
  },
  txttitulo:{
    marginTop: 10,
    marginStart: 5,
    color: '#FFFF00',
    fontFamily: 'Manrope_700Bold',
    fontSize: 18

  },
  txtvalor:{
    marginTop: 10,
    marginStart: 5,
    fontFamily: 'Manrope_700Bold',
    fontSize:18,
    color: '#FFFACD'

  },
  txtdesc:{
    fontSize:10,
    marginTop: 10,
    marginStart: 5,
    color: '#FFFFFF',
    fontFamily: 'Manrope_700Bold',

  },
  titulo:{
    marginVertical: 15,
    fontSize: 28,
    color: '#FFFF00',
    backgroundColor: '#000089',
    padding: 20,
    textAlign: 'center',
    fontFamily: 'Manrope_800ExtraBold'
  }
});

const Dadoshamburguers = [
  {
    uid: 1,
    hamburguer: 'Clássico',
    descricao: 'Pão, carne e queijo.',
    valor: 'R$ 6,90',
    img: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/8110b1bb-e037-4a6e-a1c5-18e95c051ad8/202011051540_jJAk_f.png',
  },

  {
    uid: 2,
    hamburguer: 'X - Frango',
    descricao: 'Pão, salada, frango e maionese.',
    valor: 'R$ 8,90',
    img: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/8110b1bb-e037-4a6e-a1c5-18e95c051ad8/201909121912_oGGO_y.jpg',
  },

  {
    uid: 3,
    hamburguer: 'X - Cheddar',
    descricao: 'Pão, carne, cheddar e bacon.',
    valor: 'R$ 12,90',
    img: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/8110b1bb-e037-4a6e-a1c5-18e95c051ad8/201909121910_MlTu_y.jpg',
  },

  {
    uid: 4,
    hamburguer: 'X - Tudo',
    descricao: 'Pão, salada, carne, queijo e molho.',
    valor: 'R$ 14,90',
    img: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/8110b1bb-e037-4a6e-a1c5-18e95c051ad8/201909121912_vhs4_y.jpg',
  },

  {
    uid: 5,
    hamburguer: 'X - Picanha',
    descricao: 'Pão, picanha, salada e queijo.',
    valor: 'R$ 18,90',
    img: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/8110b1bb-e037-4a6e-a1c5-18e95c051ad8/201909121911_leLJ_y.jpg',
  },

  {
    uid: 6,
    hamburguer: 'X - Salada',
    descricao: 'Pão, carne, queijo e salada.',
    valor: 'R$ 9,90',
    img: 'https://www.bragaburgerq.com.br/wp-content/uploads/2016/12/x-salada.png',
  },

  {
    uid: 7,
    hamburguer: 'Milk-Shake',
    descricao: 'Milk-Shake de chocolate 300ml.',
    valor: 'R$ 11,90',
    img: 'https://mulherdicasesolucoes.com/wp-content/uploads/2019/05/llkmnhj-2-1.png',
  },

  {
    uid: 8,
    hamburguer: 'Batata recheada',
    descricao: 'Batata G com cheddar e bacon.',
    valor: 'R$ 15,90',
    img: 'https://coolicias.ao/wp-content/uploads/2019/11/Receita-de-Batata-frita-com-queijo-e-recheio-de-bacon-TudoGostoso-1200x900.jpeg',
  },

  {
    uid: 9,
    hamburguer: 'Camarão frito',
    descricao: 'Porção G de camarão empanado.',
    valor: 'R$ 19,90',
    img: 'https://receitinhas.s3-sa-east-1.amazonaws.com/wp-content/uploads/2017/07/cam-848x477.jpg',
  },

  {
    uid: 10,
    hamburguer: 'Açaí 350ml',
    descricao: 'Açaí, leite moça e granola.',
    valor: 'R$ 10,90',
    img: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/8110b1bb-e037-4a6e-a1c5-18e95c051ad8/202003191403_3Oue_a.png',
  }
];



