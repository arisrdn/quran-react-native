import React, { Component } from "react";
import {
	Container,
	Header,
	Content,
	Footer,
	FooterTab,
	Button,
	Icon,
	Form,
	Item,
	Input,
	Label,
	Textarea,
	Left,
	Body,
	Title,
	Right,
	Row,
} from "native-base";
import { StyleSheet, Text, View } from "react-native";

import Login from "./screens/Login";

export default class App extends Component {
	render() {
		return (
			<Container>
				<Login />
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	headermenu: {
		marginTop: 20,
		color: "white",
		alignItems: "center",
		justifyContent: "center",
	},
});
