import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from "react-native";

export default class App extends React.Component {
	state = {
		email: "",
		password: "",
	};
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.logo}>WaysFood</Text>
				<View style={styles.inputView}>
					<TextInput
						style={styles.inputText}
						placeholder="Email..."
						placeholderTextColor="#003f5c"
						onChangeText={(text) => this.setState({ email: text })}
					/>
				</View>
				<View style={styles.inputView}>
					<TextInput
						secureTextEntry
						style={styles.inputText}
						placeholder="Password..."
						placeholderTextColor="#003f5c"
						onChangeText={(text) => this.setState({ password: text })}
					/>
				</View>

				<TouchableOpacity style={styles.loginBtn}>
					<Text style={styles.loginText}>LOGIN</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text>Signup</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#efefef",
		alignItems: "center",
		justifyContent: "center",
	},
	logo: {
		fontWeight: "bold",
		fontSize: 50,
		color: "#433434",
		marginBottom: 40,
	},
	inputView: {
		width: "80%",
		backgroundColor: "#d2d2d2",
		borderRadius: 5,
		height: 50,
		marginBottom: 20,
		justifyContent: "center",
		padding: 20,
	},
	inputText: {
		height: 50,
		color: "black",
	},
	loginBtn: {
		width: "80%",
		backgroundColor: "#433434",
		borderRadius: 5,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 40,
		marginBottom: 10,
	},
	loginText: {
		color: "white",
	},
	signUp: {
		color: "",
	},
});

// // import React, { Component} from "react";
// // import { View, StyleSheet } from "react-native";
// // import { Container, Content, Form } from "native-base"

// // const Login = () => {
// //     return (
// //         <Container>
// //             <Content>
// //                 <Form>

// //                 </Form>
// //             </Content>
// //         </Container>
// //     )
// // }

// // export default Login

// // const styles = StyleSheet.create({
// // 	container: {
// // 		backgroundColor: "white",
// // 		padding: 16,
// // 		flex: 1,
// // 	},
// // });

// import React, { Component } from "react";

// import {
// 	StyleSheet,
// 	Text,
// 	View,
// 	StatusBar,
// 	TouchableOpacity,
// } from "react-native";

// import Logo from "../components/Logo";

// import Form from "../components/Form";

// import { Actions } from "react-native-router-flux";

// export default class Login extends Component {
// 	signup() {
// 		Actions.signup();
// 	}

// 	render() {
// 		return (
// 			<View style={styles.container}>
// 				<Logo />

// 				<Form type="Login" />

// 				<View style={styles.signupTextCont}>
// 					<Text style={styles.signupText}>Dont have an account yet?</Text>

// 					<TouchableOpacity onPress={this.signup}>
// 						<Text style={styles.signupButton}> Signup</Text>
// 					</TouchableOpacity>
// 				</View>
// 			</View>
// 		);
// 	}
// }

// const styles = StyleSheet.create({
// 	container: {
// 		backgroundColor: "#455a64",

// 		flex: 1,

// 		alignItems: "center",

// 		justifyContent: "center",
// 	},

// 	signupTextCont: {
// 		flexGrow: 1,

// 		alignItems: "flex-end",

// 		justifyContent: "center",

// 		paddingVertical: 16,

// 		flexDirection: "row",
// 	},

// 	signupText: {
// 		color: "rgba(255,255,255,0.6)",

// 		fontSize: 16,
// 	},

// 	signupButton: {
// 		color: "#ffffff",

// 		fontSize: 16,

// 		fontWeight: "500",
// 	},
// });

// import "react-native-gesture-handler";
// import * as React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

// import Restaurant from "./src/screens/Restaurant";
// import PostDetail from "./src/screens/PostDetail";

// const Stack = createStackNavigator();

// export default function App() {
// 	return (
// 		<NavigationContainer>
// 			<Stack.Navigator>
// 				<Stack.Screen
// 					name="WasyLink"
// 					component={Restaurant}
// 					options={{
// 						title: "WasysLink",
// 						headerStyle: {
// 							backgroundColor: "#ffc700",
// 						},
// 					}}
// 				/>
// 				<Stack.Screen
// 					name="PostDetail"
// 					component={PostDetail}
// 					options={{
// 						title: "Details Post",
// 						headerStyle: {
// 							backgroundColor: "#ffc700",
// 						},
// 					}}
// 				/>
// 			</Stack.Navigator>
// 		</NavigationContainer>
// 	);
// }
