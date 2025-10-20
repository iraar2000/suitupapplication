import { Pressable, Text, View, StyleSheet } from "react-native";
import { icon } from "../Constants/icons";
import { Colors } from "../Constants/Colors";


export default function TabBarButton({onPress, onLongPress, label, routeName, isFocused}){
    
    return(
        <Pressable onPress={onPress} onLongPress={onLongPress} style={style.tbBarButton}>
            {routeName == "cart" && (
                <View style={style.badgeLabelContainer}>
                    <Text style={style.badgeLabelText}>3</Text>
                </View>
            )}
            {icon[routeName]({color: isFocused? Colors.Primary: Colors.Gray})}
            <Text style={{color: isFocused? "#673ab7": "#222"}}>{label}</Text>
        </Pressable>
    )
}

const style = StyleSheet.create({
    tbBarButton:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
    },
    badgeLabelContainer: {
        backgroundColor: "#f00",
        position: "absolute",
        paddingVertical: 2,
        paddingHorizontal: 6,
        borderRadius: 10,
        top: -7,
        right: 25,
        zIndex: 10
    },
    badgeLabelText: {
        color: Colors.White,
        fontSize: 11
    }
})
