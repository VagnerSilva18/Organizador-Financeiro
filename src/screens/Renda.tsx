import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar
} from "react-native";
import { useState, useContext } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routes/stack.routes";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { GlobalContext } from "../context/GlobalContext";

type Props = NativeStackScreenProps<RootStackParamList, "Renda">;

export default function Renda({ navigation }: Props) {
  const [valorFormatado, setValorFormatado] = useState<string>("");
  const { setRendaMensal } = useContext(GlobalContext);


  // Formata para R$ enquanto digita
  const handleChange = (text: string) => {
    // Remove tudo que não for número
    const numericValue = text.replace(/\D/g, "");

    // Converte para número e divide por 100 para ajustar centavos
    const number = parseFloat(numericValue) / 100;

    // Atualiza com formato moeda brasileira
    if (isNaN(number)) {
      setValorFormatado("");
    } else {
      setValorFormatado(number.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      }));
    }
  };

  //Remove a formatação e converte o valor para número puro antes de salvar no GlobalContext.
  const salvarRenda = () => {
    const numericValue = valorFormatado.replace(/[^0-9]/g, "");
    const valor = parseFloat(numericValue) / 100;

    if (isNaN(valor) || valor <= 0) {
      Alert.alert("Erro", "Por favor, informe um valor válido.");
      return;
    }

    setRendaMensal(valor); // Salva no contexto global
    //Alert.alert("Sucesso", `Renda salva: R$ ${valor.toFixed(2)}`);
    console.log('Renda definida:', valor); // Depuração
    setValorFormatado("");
    navigation.navigate("Meta");
  };


  const currentStep = 1;  // Etapa atual
  const totalSteps = 4;   // Total de etapas
  const progress = (currentStep / totalSteps) * 100;


  return (
    <LinearGradient
      colors={["#FF5C5C", "#2E2F3E"]} // Define as cores da gradiente
      locations={[0, 0.38]} // Define a posição de transição entre as cores
      style={styles.container}
    >
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1, paddingHorizontal: 20 }}
        >

          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialCommunityIcons name="arrow-left-bold-circle" size={30} color="#FFFFFF" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Renda Mensal</Text>
            <View style={{ width: 30 }} />
          </View>

          <View style={styles.stepContainer}>
            <Text style={styles.stepText}>Etapa {currentStep} de {totalSteps}</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: `${progress}%` }]} />
            </View>
          </View>

          <Text style={styles.lbtitulo}>Qual é sua Receita mensal?</Text>
          <Text style={styles.lbInformacao}>Receita mensal é tudo o que entra na sua conta por mês.</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite aqui.."
            placeholderTextColor="#808080"
            keyboardType="numeric" // Apenas números
            value={valorFormatado}
            onChangeText={handleChange}
          />
          <Text style={{ color: '#808080', fontSize: 12 }}>
            Insira o valor em reais, ex: 1500
          </Text>
          <TouchableOpacity style={styles.button} onPress={salvarRenda}>
            <Text style={styles.buttonText}>Salvar Renda</Text>
          </TouchableOpacity>

        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    paddingTop: 40
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  button: {
    width: "100%",
    backgroundColor: "#FFFFFF20",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
    marginTop: 30
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  lbtitulo: {
    fontSize: 20,
    color: '#FFFFFF',
    paddingTop: 15,
    paddingBottom: 5,
    textAlign: 'left'
  },
  lbInformacao: {
    fontSize: 13,
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'left'
  },
  input: {

    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
    color: '#000',
    borderColor: '#FFF',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    fontSize: 18,
    marginBottom: 5,
  },
   stepContainer: {
    marginBottom: 20,
  },
  stepText: {
    color: '#FFF',
    marginBottom: 6,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#808080',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: 8,
    backgroundColor: '#4CAF50',
    borderRadius: 4,
  },

});
