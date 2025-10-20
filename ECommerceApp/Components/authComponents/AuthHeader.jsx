import { Ionicons } from '@expo/vector-icons'
import { View, Text, TouchableOpacity } from 'react-native'
import { BlackTheme, Colors } from '@/Constants/Colors'
import { router } from 'expo-router'
import {icon} from "@/Constants/icons"

const AuthHeader = () => {
  return (
    <View>
      <TouchableOpacity onPress={()=>{
        router.dismissAll();
        router.replace("/");
      }}>
        {icon["close"]({color:BlackTheme.Black})}
        {/**<Ionicons name="close-sharp" size={22} color={Colors.Gray}/>*/}
      </TouchableOpacity>
    </View>
  )
}

export default AuthHeader