import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet, TextInputProps } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function InputSenha({ ...rest }: TextInputProps) {
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        secureTextEntry={!senhaVisivel}
        {...rest}
      />
      <TouchableOpacity onPress={() => setSenhaVisivel(!senhaVisivel)} style={styles.icon}>
        <MaterialCommunityIcons
          name={senhaVisivel ? "eye" : "eye-off"}
          size={20}
          color="#000"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFF",
    borderColor: "#FFF",
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
     
  },
  input: {
    flex: 1,
    color: "#000",
    fontSize: 16,
    paddingLeft: 10,
    height: 50,
  },
  icon: {
    paddingHorizontal: 10,
  },
});
