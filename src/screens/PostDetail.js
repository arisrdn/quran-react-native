import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Image, ListItem } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import axios from "axios";
import { RefreshControl } from "react-native";
import HTML from "react-native-render-html";

const PostDetail = (props) => {
	const title = props.route.params.title;
	const body = props.route.params.body;
	const id = props.route.params.number_of_surah;

	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		getComments();
	}, []);

	const getComments = () => {
		setIsLoading(true);
		axios
			// .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
			.get(
				`https://raw.githubusercontent.com/penggguna/QuranJSON/master/surah/${id}.json`
			)
			.then((res) => {
				setComments(res.data.verses);
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
				{/* <ListItem key={item.number.toString()} bottomDivider> */}
				<View style={styles.CardStyle}>
					<View style={styles.cardContainer}>
						<View style={styles.numberCircleContainer}>
							<View style={styles.NumberCircle}>
								<Text style={styles.textNumber}>{item.number}</Text>
							</View>
						</View>
						<View style={styles.descContainer}>
							<Text style={styles.descTextRight}>{item.text}</Text>
							<HTML
								html={item.translation_id}
								containerStyle={styles.descTextLeftContainer}
								baseFontStyle={styles.descTextLeft}
							/>
						</View>
					</View>
				</View>
				{/* <ListItem.Content>
						<ListItem.Title numberOfLines={1}></ListItem.Title>
					</ListItem.Content>
					<ListItem.Chevron />
				</ListItem> */}
			</>
		);
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={comments}
				renderItem={_renderItem}
				// keyExtractor={(item) => item.id.toString()}
				refreshControl={
					<RefreshControl refreshing={isLoading} onRefresh={getComments} />
				}
			/>
		</View>
	);
};

export default PostDetail;

const styles = StyleSheet.create({
	CardStyle: {
		height: "auto",
		padding: 10,
		borderBottomColor: "grey",
		borderBottomWidth: 1,
	},
	borde: {
		height: "auto",
		padding: 10,
	},
	cardContainer: {
		flex: 1,
		flexDirection: "row",
	},
	numberCircleContainer: {
		flex: 0.75,
	},
	descContainer: {
		flex: 3,
		flexDirection: "column",
		justifyContent: "center",
	},
	NumberCircle: {
		height: 45,
		width: 45,
		borderRadius: 100,
		borderColor: "#f0f0f0",
		borderWidth: 2,
		backgroundColor: "#fff",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 25,
		marginLeft: 5,
		marginBottom: 10,
	},
	textNumber: {
		color: "#596c75",
		fontSize: 18,
		// fontFamily: fontType.semiBold,
	},
	descTextRight: {
		textAlign: "right",
		paddingTop: 10,
		paddingRight: 10,
		fontSize: 27,
		// fontFamily: fontType.arabic,
		lineHeight: 70,
	},
	descTextLeftContainer: {
		paddingVertical: 10,
		paddingRight: 10,
	},
	descTextLeft: {
		color: "#596c75",
		fontSize: 14,
		lineHeight: 30,
		// fontFamily: fontType.regular,
	},
});
