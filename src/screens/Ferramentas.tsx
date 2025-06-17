import { StyleSheet, Text, View } from 'react-native';

export default function Ferramentas() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ferramentas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 22,
    fontWeight: 'bold'
  }
});
