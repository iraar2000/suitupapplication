import { useEffect } from "react";
import { ImageBackground } from "react-native";
import { View, StyleSheet, Dimensions, Text, FlatList, Platform } from "react-native";

const width = Dimensions.get("window").width-32;
let CardWidth = width;
let CardHeight = 200;

const AdCard = ({item}) => {
    if(Platform.OS == "web" ) {
        CardWidth = (width/2 - 4);
        CardHeight = 220
    }
    return (
        <View style={styles.mainAdContainer}>
            {
                Platform.OS == "web" &&
                <View style={[styles.adsCardContainer, {width: CardWidth}]}>
                    <Text>{item}</Text>
                </View>
            }
            <View style={[styles.adsCardContainer, {width: CardWidth}]}>
                <ImageBackground source={require("C:/ReactNativeStudyApplication/ECommerceApp/assets/images/addPicture.jpg")} resizeMode="stretch" style={[styles.adsCardContainer, {width: CardWidth}]}>
                    <Text>{item}</Text>
                </ImageBackground>
            </View>
        </View>
            
    )
}

export default AdCard;

const styles = StyleSheet.create({
    adsCardContainer: {
        height: CardHeight-16,
        borderRadius: 20,
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#f00"
    },
    mainAdContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: CardHeight,
        width: width+16,
        paddingHorizontal: 8 
    }
})