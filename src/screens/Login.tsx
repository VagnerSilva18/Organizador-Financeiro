import {
  View,
  Alert,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../routes/stack.routes";
import { Input } from "../components/Input";
import { InputSenha } from "../components/InputSenha";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'

type Props = NativeStackScreenProps<RootStackParamList, "Inicio">;

export default function Login({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const validateLogin = () => {
    if (email === "" || senha === "") {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }
    // Verifica se o e-mail tem o formato correto
    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert("Erro", "Digite um e-mail válido!");
      return;
    }

    //Alert.alert("Login", `Email: ${email}\nSenha: ${senha}`);
    navigation.replace("Main"); //replace substitui a tela atual por uma nova na pilha dessa forma o botao de voltar nao funciona
  };

  const Aviso = () => {
    Alert.alert("Aviso", "Em desenvolvimento!");
  };

  const Cadastrar_usuario = () => {
    navigation.navigate("CadUsuario");
  };

  const Listar_usuario = () => {
    navigation.navigate("ListUser"); //navigate mantem a pinha de navegação botao de voltar funcionando
  };

  return (

    <LinearGradient
      colors={['#FF5C5C', '#2E2F3E']} // Define as cores da gradiente
      locations={[0, 0.38]} // Define a posição de transição entre as cores
      style={styles.container}
    >

      <View style={styles.btnFechar}>
        <TouchableOpacity onPress={Listar_usuario}>
          <MaterialCommunityIcons name="cog" size={30} color="#FFFFFF" />
        </TouchableOpacity>
      </View>


      <View style={styles.contentLogo}>
        <Image source={require("../assets/icon.png")} style={styles.imgLogo} />
        <Text style={styles.titleLogo}>ORGFINAN</Text>
      </View>

      <Input placeholder="Email" onChangeText={setEmail} value={email} />

      <InputSenha placeholder="Senha" onChangeText={setSenha} value={senha} />

      <TouchableOpacity style={styles.btnEntrar} onPress={validateLogin}>
        <Text style={styles.txtEntrar}>ENTRAR</Text>
      </TouchableOpacity>

      <View>
        <TouchableOpacity onPress={Aviso}>
          <Text style={styles.txtSenha}>Esqueci minha senha</Text>
        </TouchableOpacity>

        <Text style={styles.txt}>Ou faça login com</Text>

        <View style={styles.logoFlex}>
          <TouchableOpacity onPress={Aviso}>
            <Image
              source={require("../assets/google.png")}
              style={styles.imgGoogle}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={Aviso}>
            <Image
              source={require("../assets/facebook.png")}
              style={styles.imgFacebook}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btnResgistrar} onPress={Cadastrar_usuario}>
          <Text style={styles.txtEntrar}>Novo por aqui? CADASTRE-SE</Text>
        </TouchableOpacity>
      </View>


    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  btnFechar: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  contentLogo: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  imgLogo: {
    width: 115,
    height: 115,
    resizeMode: "contain",
  },
  titleLogo: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#ffffff",
  },
  btnEntrar: {
    width: "100%",
    height: 50,
    borderColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#2E2F3E",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  txtEntrar: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  imgGoogle: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  imgFacebook: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  logoFlex: {
    flexDirection: "row",
    gap: 30,
    marginTop: 15,
    justifyContent: "center",
  },
  btnResgistrar: {
    width: "100%",
    padding: 5,
    //backgroundColor: '#333',
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    flexDirection: "row",
  },
  txtSenha: {
    color: "#FFFFFF",
    marginTop: 15,
    fontSize: 16,
  },
  txt: {
    color: "#FFFFFF",
    marginTop: 15,
    fontSize: 16,
    textAlign: "center",
  },
});
