import { Dimensions, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Stack } from 'expo-router'
import { BlackTheme } from '@/Constants/Colors'
import ValueInput from '../../Components/measureCompoments/ValueInput'
import viewData from '../../assets/json/measurementView.json'
import { useNetworkConfig } from '../../hooks/NetworkConfigProvider'

var displayWidth = 0;
var displayHeight = 0;
var mainContainerPadding = 0;
const DeviceWidth = Dimensions.get("window").width - mainContainerPadding;

if(DeviceWidth<600) {
    displayWidth = DeviceWidth;
    displayHeight = displayWidth/0.7;
}
else if(DeviceWidth<900) {
    displayWidth = DeviceWidth;
    displayHeight = 500;
    mainContainerPadding = 16;
}
else{
    displayWidth = 800;
    displayHeight = 500;
    mainContainerPadding = 16;
};

const MeasurementForm = () => {
  const [measureList, setMeasureList] = useState([
    "neckCircumference","shoulderWidth" , "armLength",  
    "bicepsCircumference","wristCircumference", "chestCircumference", 
    "jacketWaist", "bellyCircumference", "jacketLength", 
    "waistCircumference", "hipCircumference", "trouserRise",  
    "thighCircumference", "kneeCircumference", "trouserLength"
  ])
  const {APIHOSTDB, APIHOSTIMG, NetworkConfig} = useNetworkConfig();
  const [measureData, setMeasureData] = useState(viewData[measureList[0]]);
  const [measureInputData, setMeasureInputData] = useState({});
  const [nextCounter, setNextCounter] = useState(0);

  const incrementNextCounter = () => {
    setNextCounter((prev) => ( prev<measureList.length-1? prev += 1 : prev ))
    console.log(measureInputData);
  };

  const decrementNextCounter = () => {
    setNextCounter((prev) => ( prev>0? prev-= 1 : 0 ))
  };

  useEffect(()=>{
    setMeasureData(viewData[measureList[nextCounter]]);
  },[nextCounter, measureData])

  return (
    <>
      <Stack.Screen options={{headerShown: false}}/>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View key={nextCounter} style={{flex:1}}>
          <ScrollView style={[styles.itemWrapper, stylesByPlatform.itemWrapper]}>
            <View style={styles.displayCntrlWrapper}>
              <View style={styles.displayWrapper}>
                <Image source={{uri: APIHOSTIMG+measureData.image}} style={{width: (displayHeight-100)*(395/562), height:displayHeight-100}} resizeMode='cover'/>
              </View>
              <View style={styles.measureInputWrapper}>
                <Text style={styles.Title}>Measurements</Text>
                {
                  measureData.inputTextTitles.map((items, index) => (
                    console.log(measureInputData),
                    <ValueInput key={index} titleText={items} inputValue={measureInputData[items]} setInputValue={setMeasureInputData}/>
                  ))
                }
                <View style={styles.BackNextButtonsContainer}>
                    <TouchableOpacity style={[styles.cntrlButton, {backgroundColor:BlackTheme.GrayWhite}]} onPress={decrementNextCounter}>
                      <Text style={[styles.Title, {color: BlackTheme.Black}]}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.cntrlButton, {backgroundColor:BlackTheme.GreenColor}]} onPress={incrementNextCounter}>
                      <Text style={[styles.Title, {color: BlackTheme.ConcentratedWhite}]}>Next</Text>
                    </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.measurementDesignWrapper}>
              
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </>
  )
}

export default MeasurementForm

const styles = StyleSheet.create({
  Title: {
    color: BlackTheme.ConcentratedWhite,
    fontSize: 20,
    fontWeight: "900",
    lineHeight: 24,
    marginVertical: 4
  },
  itemWrapper: {
    backgroundColor: BlackTheme.FirstLevelBackground,
    flex: 1,
  },
  // left container
  displayCntrlWrapper: {
    borderRadius: 20,
    flexDirection: "column",
    backgroundColor: BlackTheme.SecondLevelBackground,
  },
  displayWrapper: {
    borderRadius: 20,
    width: displayWidth,
    height: displayHeight,
    backgroundColor: BlackTheme.ConcentratedWhite,
    marginBottom: 4,
    alignItems: "center",
    justifyContent: "center"
  },
  measureInputWrapper: {
    borderRadius: 20,
    backgroundColor: BlackTheme.SecondLevelBackground,
    paddingHorizontal: 8,
    flex: 1
  },
  // right container
  measurementDesignWrapper: {
    flexDirection: "column",
    flex: 1,
    gap: 8
  },
  BackNextButtonsContainer: {
    marginTop: 4,
    marginBottom: 8,
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 24
  },
  cntrlButton: {
    width: 180,
    height: 44,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: BlackTheme.ConcentratedWhite
  }
})

const stylesByPlatform = StyleSheet.create({
  itemWrapper: {
    ...Platform.select({
      web: {
        flexDirection: "row",
      },
      ios: {
        flexDirection: "column",
      },
      android: {
        flexDirection: "column",
      }
    }),
  },
})