import { StyleSheet, Text, View, Platform } from 'react-native'
import { BlackTheme } from "../../Constants/Colors.js"
import React from 'react'

const CharacteristicCard = ({CardWidth ,CharactData}) => {
  console.log("Characteristic Data: ",CharactData);
  return (
    <View style={[styles.MainContainer, {width: CardWidth-16}]}>
      <Text style={styles.Title}>Characteristics</Text>
      <View style={styles.CharacteristicListContainer}>   
        {CharactData[1].map((element, index) => (
              <View key={index} style={{flexDirection:"row"}}>
                <Text  style={[styles.elementText,{color:BlackTheme.MediumWhite}]}>
                {element} : {" "}
                </Text>
                <Text style={[styles.elementText, {fontWeight:"600"}]}>
                {CharactData[0][element.toString()]}  
                </Text>
              </View>
          ))}
      </View>
    </View>
  )
}

export default CharacteristicCard

const styles = StyleSheet.create({
    MainContainer: {
        ...Platform.select({
          web: { marginHorizontal: 24},
          ios: {marginHorizontal: 8},
          android: {marginHorizontal: 8}
        }),
        backgroundColor: BlackTheme.SecondLevelBackground,
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderRadius: 20,
        marginVertical: 8
    },
    Title: {
        color: BlackTheme.ConcentratedWhite,
        fontSize: 20,
        fontWeight: "900",
        lineHeight: 24,
        marginHorizontal: 8,
        marginBottom: 16
    },
    CharacteristicListContainer: {
        marginBottom: 8,
    },
    elementText: {
        color: BlackTheme.ConcentratedWhite,
        fontSize: 15,
        lineHeight: 18,
        fontWeight: "500",
        fontFamily: "Roboto"
    }
})