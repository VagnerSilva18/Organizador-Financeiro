import { StatusBar, StyleSheet, View, Text } from "react-native";

export default function Home() {
  const valorPlanejado = 2000;
  const valorRestante = 3500;
  const totalGasto = 1500;

  return (
    <View style={styles.container}>

      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Tela Inicial</Text>
      </View>

      <View style={styles.blocosContainer}>
        <View style={styles.bloco}>
          <Text style={styles.label}>Planejado</Text>
          <Text style={styles.valorPlanejado}>{valorPlanejado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Text>
        </View>

        <View style={styles.bloco}>
          <Text style={styles.label}>Restante</Text>
          <Text style={styles.valorRestante}>{valorRestante.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Text>
        </View>
      </View>

      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total Gasto</Text>
        <Text style={styles.totalValor}>
          {totalGasto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>GASTOS POR CATEGORIAS</Text>
        <Text style={styles.footerText}>R$</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1B1E',
    paddingHorizontal: 16,
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
  blocosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  bloco: {
    backgroundColor: '#2E2F3E',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 16,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
    elevation: 3,
  },
  label: {
    color: '#AAA',
    fontSize: 14,
    marginBottom: 5,
  },
  valorPlanejado: {
    color: '#4ADE80', // Verde claro
    fontSize: 18,
    fontWeight: 'bold',
  },
  valorRestante: {
    color: '#60A5FA', // Azul claro
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalContainer: {
    backgroundColor: '#2E2F3E',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 16,
    alignItems: 'center',
    elevation: 2,
  },
  totalLabel: {
    color: '#F87171', // Vermelho claro
    fontSize: 16,
    marginBottom: 4,
  },
  totalValor: {
    color: '#F87171',
    fontSize: 22,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    paddingHorizontal: 5,
  },
  footerText: {
    color: '#86D5F6',
    fontSize: 14,
    fontWeight: '500',
  },
});
