import { StyleSheet, View, TouchableOpacity, Text, Alert } from "react-native";
import { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routes/stack.routes";
import { Input } from "../components/Input";
import { InputSenha } from "../components/InputSenha";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'

import { useProductDatabase } from "../database/useProductDatabase";

type Props = NativeStackScreenProps<RootStackParamList, "CadUsuario">;

export default function CadastrarUsuario({ navigation }: Props) {

  const [codigo, setCodigo] = useState("");
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const productDatabase = useProductDatabase();

  async function inserir() {
    try {
      const response = await productDatabase.create({ usuario, email, senha });
      Alert.alert("Sucesso", "Usuário cadastrado com codigo: " + response.insertedRowId);
    } catch (error) {
      Alert.alert("Erro", "Falha ao cadastrar o usuário.");
      console.error(error);
    }
  }

  const validateUser = async () => {
    if (!usuario || !email || !senha || !confirmarSenha) {
      Alert.alert("Erro", "Por favor, preencha todos os campos!");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert("Erro", "Digite um e-mail válido!");
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert("Erro", "As senhas não são iguais!");
      return;
    }

    await inserir();
    navigation.replace("Inicio");
  };


  return (
    <LinearGradient
      colors={['#FF5C5C', '#2E2F3E']} // Define as cores da gradiente
      locations={[0, 0.38]} // Define a posição de transição entre as cores
      style={styles.container}
    >

      <TouchableOpacity style={styles.btnFechar} onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="close-circle-outline" size={30} color="#FFFFFF" />
      </TouchableOpacity>

      <Input placeholder="Usuário" onChangeText={setUsuario} value={usuario} />
      <Input placeholder="Email" onChangeText={setEmail} value={email} />
      <InputSenha placeholder="Senha" onChangeText={setSenha} value={senha} />
      <InputSenha placeholder="Confirmar Senha" onChangeText={setConfirmarSenha} value={confirmarSenha} />

      <TouchableOpacity style={styles.btnSalvar} onPress={validateUser}>
        <Text style={styles.txtSalvar}>SALVAR</Text>
      </TouchableOpacity>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1B1B1E',
    padding: 20,
  },
  btnFechar: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  button: {
    marginTop: 20,
  },
  btnSalvar: {
    width: '100%',
    height: 50,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#2E2F3E',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  txtSalvar: {
    color: '#FFFFFF',
    fontSize: 18,
  },

});
