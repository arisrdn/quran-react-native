import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TouchableRipple } from "react-native-paper";
import { StyleSheet } from "react-native";

import { Colors } from "../../Themes/Colors";

const CardSurahList = (props) => {
	const {
		onPress,
		surahNumber,
		surahText,
		surahName,
		surahMean,
		surahAyat,
	} = props;
	return (
		<TouchableRipple
			onPress={onPress}
			rippleColor={Colors.rippleColor}
			centered
		>
			<View style={styles.CardStyle}>
				<View style={styles.cardContainer}>
					<View style={styles.numberCircleContainer}>
						<View style={styles.NumberCircle}>
							<Text style={styles.textNumber}>{surahNumber}</Text>
						</View>
					</View>
					<View style={styles.descContainer}>
						<View style={styles.descSurah}>
							<Text style={styles.descTitle}>{surahName}</Text>
							<Text style={styles.bracketLeft}>(</Text>
							<Text style={styles.descArab}>{surahText}</Text>
							<Text style={styles.bracketRight}>)</Text>
						</View>
						<Text style={styles.descSubTitleTranslate}>
							Terjemahan: {surahMean}
						</Text>
						<Text style={styles.descSubTitleAyat}>
							Jumlah Ayat: {surahAyat}
						</Text>
					</View>
					<View style={styles.goToDetailContainer}>
						<Icon
							name="keyboard-arrow-right"
							size={30}
							color="grey"
							style={styles.expandIconStyle}
						/>
					</View>
				</View>
			</View>
		</TouchableRipple>
	);
};

export { CardSurahList };

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
	},
	title: {
		fontSize: 100,
		fontWeight: "bold",
	},
	top: {
		flex: 5,
	},
	bottom: {
		flex: 1,
	},
	item: {
		paddingHorizontal: 16,
		paddingVertical: 10,
		borderBottomWidth: 1,
		borderBottomColor: "grey",
	},
	titleItem: {
		fontWeight: "bold",
	},
});
