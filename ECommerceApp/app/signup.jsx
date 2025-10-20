import { View, Text, TouchableOpacity } from 'react-native'
import { authStyle } from '../assets/Styles/auth.styles'
import InputField from '../Components/inputField'
import { Colors } from '../Constants/Colors'
import { Link } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const signup = () => {

   {/** TODO:
    *  1. Make the continue with ... buttons responsive
    *  2. link the database with the input text fields
    */}

  return (
    <>
      <View style={authStyle.Container}>
        <View style={authStyle.signupWrapper}>
          <Text style={authStyle.loginTitle}>Create Account</Text>

          {/** This is the form for personal account details */}
          <InputField
            placeholder="Enter Full Name"
            placeholderTextColor={Colors.Gray}
          />
           <InputField
            placeholder="Enter Email"
            placeholderTextColor={Colors.Gray}
          />
           <InputField
            placeholder="Enter Password"
            placeholderTextColor={Colors.Gray}
            secureTextEntry={true}
          /> 
          <InputField
            placeholder="Enter Confirm Password"
            placeholderTextColor={Colors.Gray}
            secureTextEntry={true}
          />

          {/** This is the create button */}
          <TouchableOpacity style={authStyle.signinBtn}>
            <Text style={authStyle.signinBtnTxt}>Create Account</Text>
          </TouchableOpacity>

          {/** This is the  router to the sign in screen*/}
          <View style={authStyle.ContainerLink}>
            <Text style={authStyle.loginTxt}> Already have an account?</Text>
            <Link href={"/signin"} asChild>
              <TouchableOpacity>
                <Text style={authStyle.loginTxtSpan}>sign in!</Text>
              </TouchableOpacity>
            </Link>
          </View>
          <View style={authStyle.Divider}/>

          {/** continue buttons field */}
          <View style={{alignSelf:"stretch", alignItems:'center'}}>
            <View style={authStyle.socialLoginWrapper}>
              <Link href={"/signin"} asChild>
                <TouchableOpacity style={authStyle.Button}>
                  <Ionicons name="mail-outline" size={20} color={Colors.Black}/>
                  <Text style={authStyle.ButtonText}>Continue with email</Text>
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
          </View>
        </View>
      </View>
    </>
  )
}

export default signup