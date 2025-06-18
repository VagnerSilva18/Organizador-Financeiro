import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routes/stack.routes";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

type Props = NativeStackScreenProps<RootStackParamList, "Duvidas">;

type FAQ = {
  question: string;
  answer: string;
};

const FAQ_DATA: FAQ[] = [
  {
    question: "Como funciona o aplicativo?",
    answer: "O aplicativo organiza suas finanças de forma simples e rápida.",
  },
  {
    question: "Posso alterar meus dados?",
    answer: "Sim! Vá em Perfil > Editar Perfil para alterar seus dados.",
  },
  {
    question: "Meus dados estão seguros?",
    answer: "Sim, utilizamos criptografia para proteger suas informações.",
  },
  {
    question: "Como Falar com o Suporte?",
    answer: "Clica no botão 'Falar com Suporte' e nos envia um email com suas dúvidas que vamos analizar sua pergunta e nos enviamos um email de resposta.",
  },
];

export default function Duvidas({ navigation }: Props) {

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <LinearGradient
      colors={['#FF5C5C', '#2E2F3E']} // Define as cores da gradiente
      locations={[0, 0.38]} // Define a posição de transição entre as cores
      style={{ flex: 1, padding: 20 }}
    >

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.cabecalho}>

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name="arrow-left-bold-circle" size={30} color="#FFFFFF" />
          </TouchableOpacity>

          <Text style={{ fontSize: 22, color: '#FFF', fontWeight: 'bold' }}>Dúvidas</Text>

          <View style={{ width: 30 }} />

        </View>

        {FAQ_DATA.map((item, index) => (
          <View key={index} style={styles.item}>
            <TouchableOpacity onPress={() => toggleExpand(index)}>
              <Text style={styles.question}>{item.question}</Text>
            </TouchableOpacity>

            {expandedIndex === index && <Text style={styles.answer}>{item.answer}</Text>}
          </View>
        ))}

        <TouchableOpacity style={styles.botao}>
          <MaterialCommunityIcons name="account-voice" size={30} color="#FFFFFF" />
          <Text style={{ color: '#FFF' }}>Falar com Suporte</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao}>
          <MaterialCommunityIcons name="cellphone-play" size={30} color="#FFFFFF" />
          <Text style={{ color: '#FFF' }}>Tutoriais</Text>
        </TouchableOpacity>

      </ScrollView>

    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  cabecalho: {
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "row",
    paddingBottom: 30,
    paddingTop: 30,
  },
  item: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#bbbbbb",
    paddingBottom: 10,
  },
  question: {
    fontSize: 18,
    fontWeight: "500",
    color: "#FFF",
  },
  answer: {
    marginTop: 8,
    fontSize: 16,
    color: "#bbbbbb",
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
});
