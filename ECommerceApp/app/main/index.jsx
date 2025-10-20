import { View, Text, FlatList, Dimensions, ScrollView, StyleSheet, Platform} from 'react-native'
import { useState } from 'react'
import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { useDeviceConfig } from '@/hooks/deviceConfigProvider';
import { useNetworkConfig } from '@/hooks/NetworkConfigProvider';
import AdCard from '@/Components/homeComponents/AdCard';
import HomeHeader from '@/Components/homeComponents/HomeHeader';
import SuitItemCard from '@/Components/SuitItemCard';
import useApiServiceFetch from "@/hooks/apiServiceFetch"
import { BlackTheme } from '@/Constants/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const width = Dimensions.get("window").width;
let adViewCardHeight = 200;
if(Platform.OS == "web") {
    adViewCardHeight = 220;
}

const index = () => {
  const [SuitsData, setSuitsData] = useState([]);
  const [newSuitData, setNewSuitData] = useState([]);
  const {screenDimension, contentCntDimension, Padding, Margin, colNums, deviceConfig} = useDeviceConfig();
  const {APIHOSTDB, APIHOSTIMG, NetworkConfig} = useNetworkConfig();
  const {useGet, usePost} = useApiServiceFetch();
  const inset = useSafeAreaInsets();

  // this part updates the APIHOST variables
  useEffect(() => {
    getAllSuits();
    getNewSuit();
  },[APIHOSTDB,APIHOSTIMG])

  // fetching all data stored in the database 
  const getAllSuits =  async () => { 
    const promise = await useGet(`${APIHOSTDB}/api/ECommerce/allProducts`);
    if(promise) setSuitsData(promise.data);
    else console.log("LOG: all suit promise is undefined!");
  }

  const getNewSuit = async () => {
    const promise = await usePost(`${APIHOSTDB}/api/ECommerce/newProduct`,{colName: "suitnew", Value: "true"})
    if(promise) setNewSuitData(promise.data);
    else console.log("LOG: new suit promise is undefined!");
  }
    

  return (
    <>
      <HomeHeader height={100}/> 
      <ScrollView style={[styles.homeMainContainer, {paddingTop: 100}]} showsVerticalScrollIndicator={false}>
        <View style={styles.newItemContainer}>
          <Text style={styles.containerIndicatoreLabelText}>New Suits</Text>
          <View style={[styles.itemWrapper]}>
            <FlatList
              data={newSuitData}
              keyExtractor={(item)=> item.id.toString()}
              renderItem={({index, item}) => (
                <View style={{flex:1, paddingLeft:8}}>
                  <SuitItemCard item={item}/>
                </View>
              )}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
        <View style={styles.adView}>
          <AdCard/>
        </View>
        <View style={[styles.itemContainer, {paddingHorizontal: Padding}]}>
            <Text style={styles.containerIndicatoreLabelText}>Available Suits</Text>
            <View style={[styles.itemWrapper, {paddingLeft: 0, width: contentCntDimension.width}]}>
              <FlatList
                key={colNums}
                data={SuitsData} 
                numColumns={colNums}
                keyExtractor={(item) => item.id.toString()} 
                renderItem={({index, item}) => (
                    <SuitItemCard item={item}/>
                )}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                initialNumToRender={5}         
                maxToRenderPerBatch={10}                  
                removeClippedSubviews={true}    
                updateCellsBatchingPeriod={10}
              />
            </View>
        </View>
      </ScrollView>
    </>
  )
}

export default index

const styles = StyleSheet.create({
    newItemContainer: {
      width: "100%",
      marginVertical: 8,
      paddingBottom: 16,
      backgroundColor: BlackTheme.SecondLevelBackground,
      borderRadius: 20,
    },
    homeMainContainer:{
        flex:1,
        backgroundColor: BlackTheme.FirstLevelBackground,
    },
    itemContainer: {
        backgroundColor: BlackTheme.SecondLevelBackground,
        marginVertical: 8,
        borderRadius: 20,
        paddingBottom: 16
    },
    containerIndicatoreLabelText: {
        fontSize: 20,
        lineHeight: 24,
        fontWeight: "900",
        color: BlackTheme.ConcentratedWhite,
        marginVertical: 16,
        marginHorizontal: 32
    },
    itemWrapper: {
      flex: 1,
    },
    adView: {
        borderRadius: 20,
        backgroundColor: BlackTheme.SecondLevelBackground,
        padding: 8,
        margin: 8,
        justifyContent: "center",
        alignItems: "center",
        width: width-16, height:adViewCardHeight,
    }
})