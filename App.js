import { NavigationContainer } from "@react-navigation/native";
import { useSelector, Provider } from "react-redux";
import { store } from "./store";
import MainStack from "./src/stacks/MainStack";
import AuthStack from "./src/stacks/AuthStack";
import { selectIsAuthenticated } from "./src/features/authSlice";

export default function App() {
	const isAuthenticated = useSelector(selectIsAuthenticated);

	return (
		<>
			<Provider store={store}>
				<NavigationContainer>
					{isAuthenticated ? <MainStack /> : <AuthStack />}
				</NavigationContainer>
			</Provider>
		</>
	);
}
