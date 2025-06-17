import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Dashboard from "../screens/Dashboard";
import Novo from "../screens/Novo";
import Profile from "../screens/Profile";
import Ferramentas from "../screens/Ferramentas";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>

            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: () => <MaterialCommunityIcons name="home" size={20}/>
                }}
            />

            <Tab.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    tabBarIcon: () => <MaterialCommunityIcons name="chart-bar" size={20} />
                }}
            />

            <Tab.Screen
                name="Cadastrar"
                component={Novo}
                options={{
                    tabBarIcon: () => <MaterialCommunityIcons name="plus-circle" size={28} color="#FF5C5C" />
                }}
            />

            <Tab.Screen
                name="Perfil"
                component={Profile}
                options={{
                    tabBarIcon: () => <MaterialCommunityIcons name="account" size={20} />
                }}
            />

            <Tab.Screen
                name="Ferramentas"
                component={Ferramentas}
                options={{
                    tabBarIcon: () => <MaterialCommunityIcons name="cog" size={20} />
                }}
            />

        </Tab.Navigator>
    )
}