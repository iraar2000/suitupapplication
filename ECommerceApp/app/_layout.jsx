import { Stack } from "expo-router";
import AuthHeader from "../Components/authComponents/AuthHeader.jsx";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="main" options={{headerShown:false}}/>
      <Stack.Screen name="ProductCardDetails" options={{headerShown:false}}/>
      <Stack.Screen name="signin" options={{presentation:"modal", headerShown:true, headerTitle:"Sign in", headerRight:()=><AuthHeader/>}}/>
      <Stack.Screen name="signup" options={{presentation:"modal", headerShown:true, headerTitle:"Sign up", headerRight:()=><AuthHeader/>}}/>
    </Stack>
  );
}
