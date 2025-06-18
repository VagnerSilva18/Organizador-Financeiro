import { StyleSheet, View, TouchableOpacity, Text, Alert, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../routes/stack.routes"; // ajuste o caminho se necessário

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export default function Ferramentas() {
  const navigation = useNavigation<NavigationProps>();
  return (
    <LinearGradient
      colors={["#FF5C5C", "#2E2F3E"]} // Define as cores da gradiente
      locations={[0, 0.38]} // Define a posição de transição entre as cores
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Configurações</Text>
      </View>

      <View style={styles.conteudoBotoes}>

        <TouchableOpacity style={styles.botao}>
          <MaterialCommunityIcons name="cloud" size={30} color="#FFFFFF" />
          <Text style={styles.texto}>Backup de Dados</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao}>
          <MaterialCommunityIcons name="account-cog" size={30} color="#FFFFFF" />
          <Text style={styles.texto}>Gerenciar Usuários</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao}>
          <MaterialCommunityIcons name="delete" size={30} color="#FFFFFF" />
          <Text style={styles.texto}>Excluir Conta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao}>
          <MaterialCommunityIcons name="lock-open" size={30} color="#FFFFFF" />
          <Text style={styles.texto}>Alterar Senha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao}>
          <MaterialCommunityIcons name="lock-reset" size={30} color="#FFFFFF" />
          <Text style={styles.texto}>Resetar Senha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao}>
          <MaterialCommunityIcons name="logout" size={30} color="#FFFFFF" />
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
  header: {
    marginBottom: 20,
    alignItems: 'center',
    marginTop: 40,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  conteudoBotoes: {
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