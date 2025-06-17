import { StyleSheet, View, Text } from "react-native";
import { useState } from "react";

export default function Home() {
  const valorPlanejado = 2000;
  const valorRestante = 3500;
  const totalGasto = 1500;

  return (
    <View style={styles.container}>

      <View style={styles.cabecalho} accessibilityRole="header">
        <Text style={styles.lbcabecalho}>Tela Inicial</Text>
      </View>

      <View style={styles.flexBloco}>
        <View style={styles.bloco}>
          <Text style={styles.txtPlanejado}>Planejado</Text>
          <Text style={styles.vMeta}>{valorPlanejado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Text>
        </View>

        <View style={styles.bloco}>
          <Text style={styles.txtRestante}>Restante</Text>
          <Text style={styles.vRestante}>{valorRestante.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Text>
        </View>
      </View>

      <View style={styles.totalInformado}>
        <Text style={styles.txtTotal}>Total Gasto</Text>
        <Text style={styles.lbTotal}>
          {totalGasto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </Text>
      </View>

      <View style={styles.txtGastos}>
        <Text style={styles.txtG}>GASTOS POR CATEGORIAS</Text>
        <Text style={styles.txtG}>R$</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1B1E',
  },
  cabecalho: {
    marginTop: 30,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  lbcabecalho: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold'
  },
  flexBloco: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    paddingVertical: 10,
  },
  bloco: {
    backgroundColor: '#2E2F3E',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    width: 150
  },
  txtPlanejado: {
    color: '#FFFFFF',
    fontSize: 14
  },
  vMeta: {
    color: '#26DC4E',
    fontSize: 17
  },
  txtRestante: {
    color: '#FFFFFF',
    fontSize: 14
  },
  vRestante: {
    color: '#61CDFC',
    fontSize: 17,
  },
  totalInformado: {
    backgroundColor: '#2E2F3E',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  txtTotal: {
    color: '#DB5D5D',
    fontSize: 16,
  },
  lbTotal: {
    fontSize: 20,
    color: '#DB5D5D'
  },
  txtGastos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  txtG: {
    color: '#86D5F6',
  },
});
