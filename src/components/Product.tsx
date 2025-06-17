import { Pressable, PressableProps, Text, TouchableOpacity, StyleSheet } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

type Props = PressableProps & {

  data: {
    usuario: string
    email: string
  }

}

export function Product({ data, ...rest }: Props) {
  return (
    <Pressable style={styles.container} {...rest}>
      <Text style={styles.usuario}>{data.usuario}</Text>
      <Text style={styles.email}>{data.email}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({

   container: {
    backgroundColor: "#00000040",
    padding: 24,
    borderRadius: 5,
    gap: 8,
    flexDirection: "column", // 👈 Agora está em coluna
    marginBottom: 5,
  },
  usuario: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  email: {
    color: "#CCC",
    fontSize: 14,
  }
});
