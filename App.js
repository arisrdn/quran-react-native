import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Restaurant from "./src/screens/Restaurant";
import PostDetail from "./src/screens/PostDetail";

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="WasyLink"
					component={Restaurant}
					options={{
						title: "Quran-mobile",
						headerStyle: {
							// backgroundColor: "#ffc700",
						},
					}}
				/>
				<Stack.Screen
					name="PostDetail"
					component={PostDetail}
					options={{
						title: "Al-Fatiha (الفاتحة)",
						headerStyle: {
							// backgroundColor: "#ffc700",
						},
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
