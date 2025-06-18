import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Alert,
  Image,
  Modal,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routes/stack.routes";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import { useProductDatabase, ProductDatabase } from "../database/useProductDatabase";
import { Product } from "../components/Product";
import { Input } from "../components/Input";
import { InputSenha } from "../components/InputSenha";

import * as ImagePicker from 'expo-image-picker';

type Props = NativeStackScreenProps<RootStackParamList, "EditarPerfil">;

export default function EditarPerfil({ navigation }: Props) {

  const [codigo, setCodigo] = useState("");
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [imagem, setImagem] = useState<string | null>(null);
  const [fotoVisible, setFotoVisible] = useState(false);

  const productDatabase = useProductDatabase();

  const openFoto = () => setFotoVisible(true);

  // Função para abrir a galeria
  const selecionarImagem = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permission.status !== 'granted') {
      Alert.alert('Permissão necessária para acessar a galeria.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      setImagem(result.assets[0].uri);
      setFotoVisible(false);
    }
  };

  // Função para abrir a câmera
  const tirarFoto = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (permission.status !== 'granted') {
      Alert.alert('Permissão necessária para acessar a câmera.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      setImagem(result.assets[0].uri);
      setFotoVisible(false);
    }
  };

  const removerFoto = () => {
    setImagem(null);
    setFotoVisible(false);
  };

  const validateUser = async () => {
    if (!usuario || !email || !senhaAtual || !novaSenha || !confirmarSenha) {
      Alert.alert("Erro", "Por favor, preencha todos os campos!");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert("Erro", "Digite um e-mail válido!");
      return;
    }

    if (novaSenha !== confirmarSenha) {
      Alert.alert("Erro", "As senhas não são iguais!");
      return;
    }

  };


  return (
    <LinearGradient
      colors={['#FF5C5C', '#2E2F3E']} // Define as cores da gradiente
      locations={[0, 0.38]} // Define a posição de transição entre as cores
      style={styles.container}
    >

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // iOS usa padding / Android height
        >
          <ScrollView contentContainerStyle={styles.scrollContent}>

            <View style={styles.cabecalho}>

              <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialCommunityIcons name="arrow-left-bold-circle" size={30} color="#FFFFFF" />
              </TouchableOpacity>

              <Text style={{ fontSize: 22, color: '#FFF', fontWeight: 'bold' }}>Editar Perfil</Text>

              <View style={{ width: 30 }} />

            </View>



            <View style={styles.imgFoto}>

              {imagem && (
                <Image
                  source={{ uri: imagem }}
                  style={{ width: 120, height: 120, borderRadius: 60 }}
                />
              )}

            </View>

            <TouchableOpacity style={styles.imgBtnFoto} onPress={openFoto}>
              <MaterialCommunityIcons name="image-edit" size={30} color="#FFF" />
              <Text style={{ color: '#FFF' }}>Mudar Foto</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.imgBtnFoto} onPress={removerFoto}>
              <MaterialCommunityIcons name="image-remove" size={30} color="#FFF" />
              <Text style={{ color: '#FFF' }}>Remover Foto Atual</Text>
            </TouchableOpacity>

            <View style={{ marginBottom: 15 }}></View>

            <Input placeholder="Usuário" onChangeText={setUsuario} value={usuario} />
            <Input placeholder="Email" onChangeText={setEmail} value={email} />
            <InputSenha placeholder="Senha Atual" onChangeText={setSenhaAtual} value={senhaAtual} />
            <InputSenha placeholder="Nova Senha" onChangeText={setNovaSenha} value={novaSenha} />
            <InputSenha placeholder="Confirmar Senha" onChangeText={setConfirmarSenha} value={confirmarSenha} />

            <TouchableOpacity style={styles.btnSalvar} onPress={validateUser}>
              <Text style={styles.txtSalvar}>SALVAR</Text>
            </TouchableOpacity>


            <Modal
              visible={fotoVisible}
              animationType="slide"
              transparent={true}
              onRequestClose={() => setFotoVisible(false)}
            >

              <View style={styles.imgModalFundo}>
                <View style={styles.imgModal}>

                  <TouchableOpacity style={styles.btnFecharFoto} onPress={() => setFotoVisible(false)}>
                    <MaterialCommunityIcons name="cog" size={30} color="#000" />
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.btnIcone} onPress={tirarFoto}>
                    <MaterialCommunityIcons name="camera" size={30} color="#000" />
                    <Text style={styles.txtIcone}>Tirar Foto</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.btnIcone} onPress={selecionarImagem} >
                    <MaterialCommunityIcons name="image" size={30} color="#000" />
                    <Text style={styles.txtIcone}>Selecionar da Galeria</Text>
                  </TouchableOpacity>

                </View>
              </View>
            </Modal>

          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>


    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    alignItems: 'center'
  },
  cabecalho: {
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "row",
    paddingBottom: 10,
    paddingTop: 20
  },
  imgFoto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    overflow: "hidden",
    backgroundColor: "#2E2F3E",
  },
  button: {
    marginTop: 20,
  },
  btnSalvar: {
    width: "100%",
    height: 50,
    borderColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#2E2F3E",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  txtSalvar: {
    color: "#FFFFFF",
    fontSize: 18,
  },

  imgBtnFoto: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#00000040",
    padding: 5,
    borderRadius: 10,
    gap: 12,
    marginBottom: 8,
    width: "80%",
    justifyContent: "center"
  },
  imgModalFundo: {
    flex: 1,
    backgroundColor: "rgba(217, 217, 217, 0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  imgModal: {
    width: "100%",
    height: 250,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  btnFecharFoto: {
    position: "absolute",
    top: 10,
    right: 25,
  },
  btnIcone: {
    flexDirection: "row",
    marginBottom: 15,
    padding: 5,
    alignItems: "center",
  },
  txtIcone: {
    color: "#000",
    paddingLeft: 10,
  },
});
