import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { AntDesign } from "@expo/vector-icons";
import { EvilIcons, AntDesign } from "@expo/vector-icons";
import HomeScreen from "./src/screens/HomeScreen";
import Contacts from "./src/screens/Contacts";
import ChatDetails from "./src/screens/ChatDetails";
import { Animated, ScrollView, StyleSheet } from "react-native";
import Map from "./src/screens/Map";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "YAMATI",
            headerRight: () => (
              <View style={{ flexDirection: "row" }}>
                <AntDesign name="camera" size={24} color="black" />
                <EvilIcons name="search" size={24} color="black" />
              </View>
            ),
          }}
        />
        <Stack.Screen name="Contacts" component={Contacts} />
        <Stack.Screen name="Username" component={ChatDetails} />
        <Stack.Screen name="Maps" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
