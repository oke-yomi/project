import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantScreen from "./src/screens/RestaurantScreen";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<>
			<StatusBar barStyle="dark-content" backgroundColor="white" />
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="Home" component={HomeScreen} />
					<Stack.Screen name="Restaurant" component={RestaurantScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}
