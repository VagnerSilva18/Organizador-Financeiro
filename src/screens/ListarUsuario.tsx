import { StyleSheet, View, TouchableOpacity, Text, Alert, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routes/stack.routes";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


import { useProductDatabase, ProductDatabase } from "../database/useProductDatabase";
import { Product } from "../components/Product";
import { Input } from "../components/Input";

type Props = NativeStackScreenProps<RootStackParamList, "ListUser">;

export default function ListarUsuario({ navigation }: Props) {

  
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<ProductDatabase[]>([]);

  const productDatabase = useProductDatabase();


  async function list() {
    try {
      const response = await productDatabase.searchByName(search)
      setProducts(response)
    } catch (error) {
      console.log(error)
    }
    
  }

  useEffect(() =>{
    list()
  },[search])


  return (

    <LinearGradient
      colors={['#FF5C5C', '#2E2F3E']} // Define as cores da gradiente
      locations={[0, 0.38]} // Define a posição de transição entre as cores
      style={styles.container}
    >

      <View style={styles.cabecalho}>
        <Text style={styles.lbcabecalho}>Listar Usuários</Text>
      </View>

      <TouchableOpacity style={styles.btnFechar} onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="close-circle-outline" size={30} color="#FFFFFF" />
      </TouchableOpacity>

      <Input placeholder="Pesquisar.." onChangeText={setSearch}/>

      <FlatList
      data={products}
      keyExtractor={(item)=> String(item.codigo)}
      renderItem={({ item }) => <Product data={item} />}
      />

    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
   btnFechar: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  cabecalho: {
    marginTop: 35,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  lbcabecalho: {
    color: '#FFFFFF',
    fontSize: 15
  },

});
