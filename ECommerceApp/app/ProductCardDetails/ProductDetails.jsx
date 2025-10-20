import { Dimensions, StyleSheet, View, ScrollView, Platform, Text } from 'react-native'
import { Stack } from 'expo-router'
import { useLocalSearchParams } from 'expo-router/build/hooks';
import { useEffect, useState } from 'react';
import ProductDetailsImageDisplay from '@/Components/ProductDetailsComponents/ProductDetailsImageDisplay';
import ProductDetailsCard from '@/Components/ProductDetailsComponents/ProductDetailsCard';
import CustomSuitLinks from '@/Components/ProductDetailsComponents/CustomSuitLinks';
import { useNetworkConfig }  from '@/hooks/NetworkConfigProvider';
import { BlackTheme} from '@/Constants/Colors'
import CharacteristicCard from '../../Components/ProductDetailsComponents/CharacteristicCard';
import SimilarProducts from '../../Components/ProductDetailsComponents/SimilarProducts';
import useApiServiceFetch from '../../hooks/apiServiceFetch';


var ImageWidth = 0;
var mainContainerPadding = 0;
const DeviceWidth = Dimensions.get("window").width - mainContainerPadding;

if(DeviceWidth<600) ImageWidth = DeviceWidth;
else if(DeviceWidth<900) {
  ImageWidth = DeviceWidth;
  mainContainerPadding = 16;
}
else{
  ImageWidth = 800;
  mainContainerPadding = 16;
};


// product details component definition
const ProductDetails = () => {
  const {APIHOSTDB, APIHOSTIMG, NetworkConfig} = useNetworkConfig();
  const [suitDetails, setSuitDetails] = useState({});
  const [similarSuits, setSimilarSuits] = useState([]);
  const [Characteristics, setCharacteristics] = useState([{},[]]);
  const [refresh, setRefresh] = useState(0);
  const {id} = useLocalSearchParams();
  const {useGet, usePost} = useApiServiceFetch();

  // accessing the database using the id provided
  useEffect(()=>{
    if(!APIHOSTDB || !APIHOSTIMG) return;
    fetchProdData();
    fetchSimilarProductData();
  }, [APIHOSTDB, APIHOSTIMG])

  useEffect(()=>{
    if(!suitDetails || !Characteristics || !similarSuits) return;
  }, [suitDetails, Characteristics, similarSuits])

  useEffect(()=>{
    setSuitDetails({});
    setCharacteristics([{},[]]);
    setSimilarSuits([]);

    fetchProdData();
    fetchSimilarProductData();
  }, [id]);

  const fetchProdData = async () => {
    const promise = await usePost(`${APIHOSTDB}/api/Ecommerce/Product`, {colName: 'id', Value: id});
    if(promise){
      setSuitDetails(promise.data[0]);
      setCharacteristics([promise.data[0], promise.columns]);}
    else console.log("LOG: promise is undefined in fetchdata function in productdetails file!");
  }

  const fetchSimilarProductData = async () => {
    const promise = await usePost(`${APIHOSTDB}/api/Ecommerce/Product`, {colName: "suitquantity", Value: (id%9)});
    if(promise) setSimilarSuits(promise.data);
    else console.log("LOG: promise is undefined in fetchdata function in productdetails file!");
  }

  // data visualizations
  return (
    <>
      <Stack.Screen options={{headerShown: false}}/>
      <View key={id} style={{flex:1}}>
        <ScrollView key={refresh} style={styles.Container} showsVerticalScrollIndicator={false}>  
          <View style={styles.mainContainer}>
            <ProductDetailsImageDisplay Host={APIHOSTIMG} Path={suitDetails.suitimages}/>
            <ProductDetailsCard screenWidth={ImageWidth} currentPrice={suitDetails.suitprice} PreviousPrice={"190 000"} discount={-10} itemLeft={50} rating={4.7} reviews={10}/>
          </View>
          <CustomSuitLinks screenWidth={ImageWidth}/>
          <CharacteristicCard CardWidth={ImageWidth} CharactData={Characteristics}/>
          <SimilarProducts similarSuits={similarSuits} flatlist={false} onSelectedItem={(itemID) => setRefresh(itemID)}/>
        </ScrollView>
      </View>
    </>
  )
};

export default ProductDetails

const styles = StyleSheet.create({
    Container: {
      paddingTop: 16,
      backgroundColor: BlackTheme.FirstLevelBackground,
    },
    mainContainer: {
      ...Platform.select({
        web: {
          borderRadius: 20,
          marginHorizontal: 16,
        },
        ios: {
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        },
        android: {
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }
      }),
      backgroundColor:  BlackTheme.SecondLevelBackground,
      width: ImageWidth,
      marginBottom: 8,
    },    
})