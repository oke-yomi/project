import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantScreen from "./src/screens/RestaurantScreen";
import { Provider } from "react-redux";
import { store } from "./store";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<>
			<StatusBar barStyle="dark-content" backgroundColor="white" />
			<NavigationContainer>
				<Provider store={store}>
					<Stack.Navigator>
						<Stack.Screen name="Home" component={HomeScreen} />
						<Stack.Screen name="Restaurant" component={RestaurantScreen} />
					</Stack.Navigator>
				</Provider>
			</NavigationContainer>
		</>
	);
}
