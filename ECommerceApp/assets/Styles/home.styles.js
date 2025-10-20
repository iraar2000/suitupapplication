import { Dimensions, Platform, StyleSheet } from "react-native"
import {BlackTheme, Colors} from "@/Constants/Colors"

const width = Dimensions.get("window").width;


export const homeStyle = StyleSheet.create({
    // this is the beginning of design for index.js file header
    Container: {
        flex:1,
        justifyContent: "center",
    },
    
    LogoText: {
        fontSize: 16,
        fontWeight: "700",
        letterSpacing:1.2,
        color:Colors.Primary,
    },

    // this is the beginning of design for index.js file body
    
})