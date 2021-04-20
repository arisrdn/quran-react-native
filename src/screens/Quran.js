import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	Button,
	StyleSheet,
	FlatList,
	TouchableHighlight,
} from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import axios from "axios";

const Posts = (props) => {
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		getPosts();
	}, []);

	const getPosts = () => {
		setIsLoading(true);
		axios
			// .get("https://jsonplaceholder.typicode.com/posts")
			.get(
				"https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json"
			)
			.then((res) => {
				console.log(res.data);
				setPosts(res?.data);
				setIsLoading(false);
			})
			.catch(() => {
				alert("Error Fetch Data");
				setIsLoading(false);
			});
	};

	const _renderItem = ({ item }) => {
		return (
			<>
				<ListItem
					onPress={() => props.navigation.navigate("PostDetail", item)}
					key={item.number_of_surah.toString()}
					bottomDivider
				>
					<View style={styles.CardStyle}>
						<View style={styles.cardContainer}>
							<View style={styles.numberCircleContainer}>
								<View style={styles.NumberCircle}>
									<Text style={styles.textNumber}>{item.number_of_surah}</Text>
								</View>
							</View>
						</View>
					</View>
					<ListItem.Content>
						<ListItem.Title h4 numberOfLines={1}>
							<View style={styles.descSurah}>
								<Text style={styles.descTitle}>{item.name}</Text>
								<Text style={styles.bracketLeft}>(</Text>
								<Text style={styles.descArab}>{item.name_translations.ar}</Text>
								<Text style={styles.bracketRight}>)</Text>
							</View>
						</ListItem.Title>

						<ListItem.Subtitle numberOfLines={2}>
							<View style={styles.descContainer}>
								<Text style={styles.descSubTitleTranslate}>
									Terjemahan: {item.name_translations.id}
								</Text>
								<Text style={styles.descSubTitleAyat}>
									Jumlah Ayat: {item.number_of_ayah}
								</Text>
							</View>
						</ListItem.Subtitle>
					</ListItem.Content>
					<ListItem.Chevron />
				</ListItem>
			</>
		);
	};
	const _renderItems = ({ item }) => {
		return (
			<>
				<TouchableHighlight
					activeOpacity={0.6}
					underlayColor="#DDDDDD"
					// onPress={() => {}}
				>
					{/* <View style={{ padding: 16, flex: 1 }}>
						<View>
							<Text style={{ fontSize: 24 }}>{item.name}</Text>
						</View>
						<View>
							<Text style={{ textAlign: "justify" }}>
								{item.number_of_surah.toString()}. {item.name_translations.id}
							</Text>
						</View>
					</View> */}

					<View style={styles.CardStyle}>
						<View style={styles.cardContainer}>
							<View style={styles.numberCircleContainer}>
								<View style={styles.NumberCircle}>
									<Text style={styles.textNumber}>{item.number_of_surah}</Text>
								</View>
							</View>
							<View style={styles.descContainer}>
								<View style={styles.descSurah}>
									<Text style={styles.descTitle}>{item.name}</Text>
									<Text style={styles.bracketLeft}>(</Text>
									<Text style={styles.descArab}>
										{item.name_translations.ar}
									</Text>
									<Text style={styles.bracketRight}>)</Text>
								</View>
								<Text style={styles.descSubTitleTranslate}>
									Terjemahan: {item.name_translations.id}
								</Text>
								<Text style={styles.descSubTitleAyat}>
									Jumlah Ayat: {item.number_of_ayah}
								</Text>
							</View>
							{/* <View style={styles.goToDetailContainer}>
								<Icon
									name="keyboard-arrow-right"
									size={30}
									color="grey"
									style={styles.expandIconStyle}
								/>
							</View> */}
						</View>
					</View>
				</TouchableHighlight>
			</>
		);
	};

	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<FlatList
					data={posts}
					renderItem={_renderItem}
					keyExtractor={(item) => item.number_of_surah.toString()}
					refreshing={isLoading}
					onRefresh={getPosts}
				/>
			</View>
			<StatusBar style="auto" />
		</View>
	);
};

export default Posts;

const colors = {
	primary: "#6EA533",
	white: "#fff",
	grey: "#596c75",
	separator: "#f0f0f0",
	iron: "#D1D3D4",
	black: "black",
	persianGreen: "#009688",
	slateGray: "#6e848f",
	rippleColor: "rgba(0, 0, 0, .05)",
	statusbarModal: "rgba(0,0,0,0.3)",
};

const styles = StyleSheet.create({
	CardStyle: {
		height: 100,
		marginHorizontal: 10,
		marginBottom: 10,
	},
	cardContainer: {
		flex: 1,
		flexDirection: "row",
	},
	numberCircleContainer: {
		flex: 1.25,
		justifyContent: "center",
	},
	descContainer: {
		flex: 3,
		flexDirection: "column",
		justifyContent: "center",
	},
	goToDetailContainer: {
		flex: 1,
		justifyContent: "center",
	},
	NumberCircle: {
		height: 45,
		width: 45,
		borderColor: colors.separator,
		borderWidth: 2,
		borderRadius: 100,
		backgroundColor: colors.white,
		justifyContent: "center",
		marginLeft: 10,
		alignItems: "center",
	},
	textNumber: {
		color: colors.grey,
		fontSize: 18,
		// fontFamily: fontType.semiBold,
	},
	descSurah: {
		flexDirection: "row",
	},
	descTitle: {
		fontSize: 16,
		paddingTop: 10,
		// fontFamily: fontType.semiBold,
	},
	bracketLeft: {
		paddingTop: 10,
		paddingLeft: 5,
		fontSize: 16,
		// fontFamily: fontType.regular,
	},
	bracketRight: {
		paddingTop: 10,
		fontSize: 16,
		// fontFamily: fontType.regular,
	},
	descArab: {
		fontSize: 19,
		paddingTop: 5,
		paddingLeft: 5,
		// fontFamily: fontType.arabic,
	},
	descSubTitleTranslate: {
		fontSize: 13,
		paddingTop: 5,
		color: colors.grey,
		// fontFamily: fontType.regular,
	},
	descSubTitleAyat: {
		fontSize: 13,
		paddingTop: 8,
		color: colors.grey,
		// fontFamily: fontType.regular,
	},
	expandIconStyle: {
		paddingTop: 5,
		marginLeft: 15,
		color: colors.grey,
	},
});

const fontType = {
	light: "Roboto-Thin",
	regular: "Roboto-Regular",
	semiBold: "Roboto-Medium",
	bold: "Roboto-Bold",
	black: "Roboto-Black",
	arabic: "LPMQ",
};

const FontWeight = {
	bold: "bold",
	semiBold: "500",
	regular: "400",
};
