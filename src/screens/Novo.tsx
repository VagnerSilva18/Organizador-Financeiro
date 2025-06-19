import { StyleSheet, View, TouchableOpacity, Text, Image, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import type { RootStackParamList } from "../routes/stack.routes";

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export default function Novo() {
  const navigation = useNavigation<NavigationProps>();

  return (
    <LinearGradient colors={["#FF5C5C", "#2E2F3E"]} locations={[0, 0.38]} style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Cadastrar Metas</Text>
      </View>

      <View style={styles.imgContainer}>
        <Image source={require("../assets/alcancar.jpg")} style={styles.img} resizeMode="contain" />
        <Text style={styles.lbMetaTitulo}>Organize suas finanças e alcance seus objetivos!</Text>
        <Text style={styles.lbMetaTexto}>Clique no botão abaixo para adicionar a meta e começar a alcançar seus objetivos!</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("Renda")}>
          <MaterialCommunityIcons name="plus-circle" size={28} color="#FFF" />
          <Text style={styles.textoBotao}>Iniciar Cadastro</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    color: "#FFF",
    fontWeight: "bold",
  },
  imgContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  img: {
    width: 250,
    height: 250,
    borderRadius: 12,
    marginBottom: 20,
  },
  lbMetaTitulo: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  lbMetaTexto: {
    color: "#E5E5E5",
    fontSize: 15,
    textAlign: "center",
    paddingHorizontal: 10,
  },
  buttonContainer: {
    alignItems: "center",
  },
  botao: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF20",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  textoBotao: {
    color: "#FFF",
    fontSize: 16,
    marginLeft: 10,
    fontWeight: "bold",
  },
});
