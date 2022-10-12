import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screen/HomeScreen";
import DetailScreen from "../screen/DetailScreen";

import navigationTheme from "../config/navigationTheme";

const Stack = createStackNavigator();
const MainNav = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="home" component={HomeScreen} />
    <Stack.Screen name="detail" component={DetailScreen} />
  </Stack.Navigator>
);

export default function AppNav() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <MainNav />
    </NavigationContainer>
  );
}
