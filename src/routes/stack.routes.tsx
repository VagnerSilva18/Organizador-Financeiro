import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/Login";
import TabRoutes from "./tab.routes";
import CadastrarUsuario from "../screens/CadastrarUsuario";
import ListarUsuario from "../screens/ListarUsuario";
import EditarPerfil from "../screens/EditarPerfil";
import Duvidas from "../screens/Duvidas";
import ConvidarAmigos from "../screens/ConvidarAmigos";
import Sobre from "../screens/Sobre";
import Renda from "../screens/Renda";
import Meta from "../screens/Meta";

export type RootStackParamList = {
  Inicio: undefined;
  Main: undefined;
  CadUsuario: undefined;
  ListUser: undefined;
  EditarPerfil: undefined;
  Duvidas: undefined;
  ConvidarAmigos: undefined;
  Sobre: undefined;
  Renda: undefined;
  Meta: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Inicio" component={Login} />
      <Stack.Screen name="Main" component={TabRoutes} options={{ gestureEnabled: false }} />
      <Stack.Screen name="CadUsuario" component={CadastrarUsuario} options={ {gestureEnabled: true }} />
      <Stack.Screen name="ListUser" component={ListarUsuario} options={ {gestureEnabled: true }} />
      <Stack.Screen name="EditarPerfil" component={EditarPerfil} />
      <Stack.Screen name="Duvidas" component={Duvidas} />
      <Stack.Screen name="ConvidarAmigos" component={ConvidarAmigos} />
      <Stack.Screen name="Sobre" component={Sobre} />
      <Stack.Screen name="Renda" component={Renda} />
      <Stack.Screen name="Meta" component={Meta} />
    </Stack.Navigator>
  );
}
