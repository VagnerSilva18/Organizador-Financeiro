import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Share, Alert } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routes/stack.routes";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

type Props = NativeStackScreenProps<RootStackParamList, "ConvidarAmigos">;


export default function ConvidarAmigos({ navigation }: Props) {

  const mensagemConvite = `Olá! Estou usando este aplicativo incrível para organizar minhas finanças. Baixe também e venha conferir! 📲`;

  const compartilharConvite = async () => {
    try {
      await Share.share({
        message: mensagemConvite,
      });
    } catch (error) {
      Alert.alert("Erro", "Não foi possível compartilhar o convite.");
    }
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

          <Text style={{ fontSize: 22, color: '#FFF', fontWeight: 'bold' }}>Convidar Amigos</Text>

          <View style={{ width: 30 }} />

        </View>

        <Text style={styles.description}>
          Compartilhe o aplicativo com seus amigos e ajude eles a organizarem suas finanças também!
        </Text>

        <TouchableOpacity style={styles.button} onPress={compartilharConvite}>
          <Text style={styles.buttonText}>Compartilhar Convite</Text>
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
  description: {
    fontSize: 16,
    color: "#FFF",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});
