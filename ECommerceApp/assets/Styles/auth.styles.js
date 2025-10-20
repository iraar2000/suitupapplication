import { StyleSheet } from "react-native"
import {Colors} from "@/Constants/Colors"

export const authStyle = StyleSheet.create({
    /** index screesn view style field */
    Container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        fontFamily:"System"
    },
    Background: {
        flex: 1,
        position: "absolute",
        top:0,
        left:0,
        right:0,
        bottom:0,
        justifyContent:"flex-end"
    },
    Wrapper: {
        paddingBottom: 50,
        paddingHorizontal: 20,
        alignItems: "center",
    },
    Title: {
        fontSize: 24,
        color: Colors.Primary,
        fontWeight:"700",
        letterSpacing:2.4,
        paddingBottom: 5
    },
    Description: {
        fontSize:14,
        color: Colors.Gray,
        letterSpacing:1.2,
        lineHeight:30,
        marginBottom:20
    },
    socialLoginWrapper: {
        alignSelf:"stretch"
    },
    Button: {
        flexDirection: "row",
        padding: 10,
        borderColor: Colors.Black,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 25,
        alignItems: "center",
        justifyContent:"center",
        gap: 5,
        marginBottom: 15
    },
    ButtonText: {
        fontSize: 14,
        fontWeight: "600",
        color: Colors.Black,
    },
    loginTxt:{
        marginTop:30,
        marginBottom:30,
        fontSize:14,
        color: Colors.Black,
        lineHeight:24,
    },
    loginTxtSpan: {
        marginTop:30,
        marginBottom: 30,
        fontSize: 14,
        fontWeight: "600",
        color: Colors.Primary,
    },
    ContainerLink: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 5
    },

    /** sign in screen view style field */
    loginWrapper:{
        alignItems:"center",
        paddingHorizontal: 20,
        alignSelf:'stretch'
    },
    loginTitle: {
        fontSize: 24,
        color: Colors.Primary,
        fontWeight:"700",
        letterSpacing:2.4,
        paddingBottom: 50
    },
    signinBtn: {
        backgroundColor:Colors.Primary,
        paddingVertical:14,
        paddingHorizontal:18,
        alignSelf:"stretch",
        alignItems:"center",
    },
    signinBtnTxt: {
        color: Colors.White,
        fontSize: 16,
        fontWeight: "600"
    },
    Divider:{
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.Gray,
        width: "50%",
        marginBottom:30,
    },
    loginSinupTxt: {
        paddingBottom: 30,
        color: Colors.Black,
        lineHeight:24,
        fontSize: 14,
    },

    /** sign up screen view style field */
    signupWrapper:{
        alignSelf:"stretch",
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent:"center"
    }

})