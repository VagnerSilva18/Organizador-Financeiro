import { TextInput, TextInputProps } from "react-native"

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      style={{
        width: '100%',
        height: 50,
        backgroundColor: '#FFF',
        color: '#000',
        borderColor: '#FFF',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 15,
        fontSize: 16,
        marginBottom: 15,
      }}
      {...rest}
    />
  );
}
