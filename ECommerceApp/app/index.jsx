import { Link } from "expo-router";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { Stack } from 'expo-router';
import { useSafeAreaInsets } from "react-native-safe-area-context"
import {LinearGradient} from "expo-linear-gradient"
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../Constants/Colors";
import { authStyle } from "../assets/Styles/auth.styles";

export default function Index() {
  
  const insets = useSafeAreaInsets();
  return (
    <>
      <Stack.Screen options={{headerShown:false}}/>
      <ImageBackground 
      source={require('@/assets/images/SuitBackground.jpg')} 
      style={{flex:1}}
      resizeMode="cover">
        <View style={authStyle.Container}>
          
          <LinearGradient colors={["transparent","rgba(166, 170, 179, 0.8)","rgba(255,255,255,0.9)"]} style={authStyle.Background}>
            <View style={authStyle.Wrapper}>
              <Text style={authStyle.Title} >SuitUP</Text>
              <Text style={authStyle.Description}>Your looks defines who you are, Be elegant!</Text>

              <View style={authStyle.socialLoginWrapper}>
                <Link href={"/signup"} asChild>
                  <TouchableOpacity style={authStyle.Button}>
                    <Ionicons name="mail-outline" size={20} color={Colors.Black}/>
                    <Text style={authStyle.ButtonText}>Continue with Email</Text>
                  </TouchableOpacity>
                </Link>

                <TouchableOpacity style={authStyle.Button}>
                  <Ionicons name="logo-google" size={20} color={Colors.Black}/>
                  <Text style={authStyle.ButtonText}>Continue with Google</Text>
                </TouchableOpacity>

                <TouchableOpacity style={authStyle.Button}>
                  <Ionicons name="logo-apple" size={20} color={Colors.Black}/>
                  <Text style={authStyle.ButtonText}>Continue with Apple</Text>
                </TouchableOpacity>
              </View>
              <View style={authStyle.ContainerLink}>
                <Text style={authStyle.loginTxt}>Already have an account?</Text>
                <Link href={"/signin"} asChild>
                  <TouchableOpacity>
                    <Text style={authStyle.loginTxtSpan}>SignIn</Text>
                  </TouchableOpacity>
                </Link>
              </View>
            </View>
          </LinearGradient>
        </View>
      </ImageBackground>
    </>
  );
}
