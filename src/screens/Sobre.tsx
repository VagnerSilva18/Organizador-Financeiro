import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  navigation: any;
};

export default function Sobre({ navigation }: Props) {
  return (
    <LinearGradient
      colors={['#FF5C5C', '#2E2F3E']}
      locations={[0, 0.38]}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Cabeçalho */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name="arrow-left-bold-circle" size={30} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Termos de Uso</Text>
          <View style={{ width: 30 }} />
        </View>

        {/* Conteúdo */}
        <Text style={styles.sectionTitle}>1. Aceitação dos Termos</Text>
        <Text style={styles.text}>
          Ao cadastrar-se e utilizar o Orgfinan, você concorda automaticamente com estes Termos de Uso.
        </Text>

        <Text style={styles.sectionTitle}>2. Dados Coletados</Text>
        <Text style={styles.text}>
          O aplicativo armazena apenas:
          {"\n•"} Endereço de e-mail
          {"\n•"} Nome de Usuário
          {"\n•"} Foto de perfil (opcional)
          {"\n•"} Senha (criptografada)
          {"\n•"} Renda mensal informada
          {"\n•"} Gastos mensais e por categorias
        </Text>

        <Text style={styles.sectionTitle}>3. Uso dos Dados</Text>
        <Text style={styles.text}>
          Seus dados serão utilizados exclusivamente para:
          {"\n•"} Personalizar sua experiência no app
          {"\n•"} Gerar relatórios financeiros
          {"\n•"} Manter sua conta segura
        </Text>

        <Text style={styles.sectionTitle}>4. Responsabilidades</Text>
        <Text style={styles.text}>
          Você concorda em:
          {"\n•"} Fornecer informações verdadeiras
          {"\n•"} Manter sua senha em sigilo
          {"\n•"} Não compartilhar sua conta
        </Text>

        <Text style={styles.sectionTitle}>5. Segurança</Text>
        <Text style={styles.text}>
           • Utilizamos criptografia para proteger seus dados
          {"\n•"} Nunca solicitaremos sua senha por e-mail, SMS ou telefone
          {"\n•"} Nossa equipe não tem acesso às suas senhas
          {"\n•"} Recomendamos o uso de senha forte e única
        </Text>

        <Text style={styles.sectionTitle}>6. Exclusão de Conta</Text>
        <Text style={styles.text}>
          Você pode excluir sua conta a qualquer momento. Isso removerá todos os seus dados do nosso sistema.
        </Text>

        <Text style={styles.sectionTitle}>7. Isenção de Responsabilidade</Text>
        <Text style={styles.text}>
          • O app não oferece aconselhamento financeiro profissional
          {"\n•"} Você é responsável por suas decisões financeiras
          {"\n•"} Não garantimos resultados financeiros específicos
        </Text>

        <Text style={styles.sectionTitle}>8. Alterações</Text>
        <Text style={styles.text}>
          Podemos atualizar estes Termos periodicamente. Continuar usando o app após mudanças significa aceitar os novos termos.
        </Text>

        <View style={{ paddingBottom: 60 }}></View>

      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    paddingTop: 20
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    color: "#EEE",
    lineHeight: 22,
  },
});
