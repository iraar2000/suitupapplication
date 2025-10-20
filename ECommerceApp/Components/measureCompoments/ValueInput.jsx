import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import InputField from '../inputField'
import { BlackTheme } from '@/Constants/Colors'

const ValueInput = ({titleText, inputValue, setInputValue}) => {
  return (
    <View style={styles.measureInputContainer}>
    
        {/** TODO: 1. here placeholder shoulder be changed dynamicaly with respect to the 
         *         part being measured.
         * 
         *         2. also the measurement unit changer button should when clicked should change the
         *         unit of measurement accordingly
         * */}

        <InputField
            style={styles.inputFieldStyle}
            placeholder={titleText}
            placeholderTextColor={BlackTheme.Gray}
            value={inputValue}
            onChangeText={(text) => setInputValue((prev)=>({...prev,[titleText]:text}))}    
        />
        <TouchableOpacity style={styles.measurementUnitChanger}>
            <Text>cm</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ValueInput

const styles = StyleSheet.create({
    measureInputContainer:{
        flexDirection: "row",
        marginVertical: 4
    },
    inputFieldStyle: {
        width: 324, 
        height: 44, 
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20, 
        backgroundColor: BlackTheme.ConcentratedWhite,
        paddingHorizontal: 16
    },
    measurementUnitChanger: {
        width: 90,
        height: 44,
        backgroundColor: BlackTheme.GrayWhite,
        alignItems: "center",
        justifyContent: "center",
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20
    },
})