import { StyleSheet, View, TouchableOpacity, Text, Alert, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../routes/stack.routes"; // ajuste o caminho se necessário

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export default function Profile() {
  const navigation = useNavigation<NavigationProps>();
  return (
    <LinearGradient
      colors={["#FF5C5C", "#2E2F3E"]} // Define as cores da gradiente
      locations={[0, 0.38]} // Define a posição de transição entre as cores
      style={styles.container}
    >
      <View style={styles.cabecalho}>
        <Text style={styles.lbcabecalho}>Meu Perfil</Text>
      </View>

      <View style={styles.conteudoBotoes}>

        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("EditarPerfil")}>
          <MaterialCommunityIcons name="account-edit" size={30} color="#FFFFFF" />
          <Text style={styles.texto}>Editar Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao}>
          <MaterialCommunityIcons name="message-question" size={30} color="#FFFFFF" />
          <Text style={styles.texto}>Dúvidas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao}>
          <MaterialCommunityIcons name="account-group" size={30} color="#FFFFFF" />
          <Text style={styles.texto}>Convidar Amigos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao}>
          <MaterialCommunityIcons name="information-outline" size={30} color="#FFFFFF" />
          <Text style={styles.texto}>Sobre</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao}>
          <MaterialCommunityIcons name="account-remove" size={30} color="#FFFFFF" />
          <Text style={styles.texto}>Desconectar</Text>
        </TouchableOpacity>

      </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  conteudoBotoes:{
    paddingHorizontal: 10,
  },
  botao: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#00000040",
    padding: 15,
    borderRadius: 10,
    gap: 12,
    marginBottom: 8,


  },
  texto: {
    color: '#FFF',
  }

});