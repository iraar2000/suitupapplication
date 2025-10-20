import { View, TextInput, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from "@expo/vector-icons";
import { Colors} from '@/Constants/Colors';
import { icon } from '@/Constants/icons';
import { BlackTheme } from '@/Constants/Colors';

const HomeHeader = ({height}) => {
    const insets = useSafeAreaInsets();
    return (
        <View style={[styles.headerContainer, {height: height}]}>
            <View style={[styles.headerWrapper, {paddingTop:insets.top,backgroundColor: "#02e3f3"}]}>
                <View style={styles.MenuIconContainer}>
                    {icon["menu"]({color: BlackTheme.Black})}
                </View>
                <View style={styles.SearchBarContainer}>
                    {icon["search"]({color: BlackTheme.Black})}
                    <TextInput
                    placeholder='Search here...'
                    placeholderTextColor={Colors.Gray} 
                    style={styles.SearchTextInput}
                    underlineColorAndroid="transparent"
                    />
                    {icon["camera"]({color:BlackTheme.Black})}
                </View>
            </View>
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    headerContainer: {
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        overflow: "hidden",
        zIndex: 10,
    },
    headerWrapper: {
        flex: 1,
        backgroundColor: BlackTheme.SecondLevelBackground,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        height: 100,
        alignItems: "center",
        flexDirection: "row",
        justifyContent:"space-between",
        paddingHorizontal: 20,
        paddingVertical: 10,
        gap:10,
    },
    SearchTextInput: {
        backgroundColor: Colors.White,
        color: Colors.Gray,
        fontSize:16,
        fontWeight:"400",
        flex: 1
    },
    MenuIconContainer: {
        backgroundColor: BlackTheme.ConcentratedWhite,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    SearchBarContainer: {
        flex: 1, 
        flexDirection: "row",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: Colors.White,
        borderRadius: 10,       
        paddingVertical: 10,
        paddingHorizontal: 20,
        gap: 10,
    },
})
