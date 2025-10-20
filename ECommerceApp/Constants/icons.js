import { Ionicons } from "@expo/vector-icons";
import Icons from "react-native-vector-icons/FontAwesome5";

export const icon = {
    index: ({color})=>(<Ionicons name="home" size={22} color={color}/>),
    notification: ({color}) => (<Ionicons name="notifications" size={22} color={color}/>),
    explore: ({color}) => (<Ionicons name="search" size={22} color={color}/>),
    cart: ({color}) => (<Ionicons name="cart" size={22} color={color}/>),
    profile: ({color}) => (<Ionicons name="person" size={22} color={color}/>),
    backArrow: ({color}) => (<Ionicons name="chevron-back" size={22} color={color}/>),
    share: ({color}) => (<Ionicons name="share-outline" size={22} color={color}/>),
    search: ({color}) => (<Ionicons name="search" size={22} color={color}/>),
    favorite: ({color}) => (<Ionicons name="heart" size={22} color={color}/>),
    favorite_outline: ({color}) => (<Ionicons name="heart-outline" size={22} color={color}/>),
    star: ({color}) => (<Ionicons name="star" size={16} color={color}/>),
    chatBox: ({color}) => (<Ionicons name="chatbubble" size={16} color={color}/>),
    tapeMeasure: ({color}) => (<Icons name="ruler" size={22} color={color}/>),
    menu: ({color}) => (<Ionicons name="menu" size={22} color={color}/>),
    camera: ({color}) => (<Ionicons name="camera" size={22} color={color}/>),
    close: ({color}) => (<Ionicons name="close" size={22} color={color}/>),
}
