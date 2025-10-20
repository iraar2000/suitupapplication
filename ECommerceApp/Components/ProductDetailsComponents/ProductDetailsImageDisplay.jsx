import { View, Text, StyleSheet, ImageBackground, Dimensions, Platform, TouchableOpacity } from 'react-native'
import { Colors, BlackTheme } from '@/Constants/Colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useState } from 'react';
import { icon } from '../../Constants/icons';

// setting the screen dimensions
var ImageWidth = 0;
var ImageHeight = 0;
var mainContainerPadding = 0;
const DeviceWidth = Dimensions.get("window").width - mainContainerPadding;

if(DeviceWidth<600) {
    ImageWidth = DeviceWidth;
    ImageHeight = ImageWidth/0.7;
}
else if(DeviceWidth<900) {
    ImageWidth = DeviceWidth;
    ImageHeight = 500;
    mainContainerPadding = 16;
}
else{
    ImageWidth = 800;
    ImageHeight = 500;
    mainContainerPadding = 16;
};


const ProductDetailsImageDisplay = ({Host, Path}) => {
  const inset = useSafeAreaInsets();
  const [heartIsClicked, setHeartIsClicked] = useState(false);

  // Image Path Creatiion and initialization
  let ImageURL = Host
  if(Path === undefined ){
    console.log("the path is undefined");
  }else if(Path !== undefined){
    ImageURL = ImageURL + Path;
  }

  ////////////// TODO List //////////////////
  // function for opening the sharing window to different social networks.
  const share = () => {
    console.log("share icon clicked");
  };
  
  // function for opening the search window where different suggetion will be displayed.
  const search = () => {
    console.log("search icon clicked");
  };

  // function which will book mark this product to the favorite section in the client account.
  const favorite = () => {
    // this area is for icon visual
    if(!heartIsClicked) setHeartIsClicked(true);
    else if(heartIsClicked) setHeartIsClicked(false)
    
              
    console.log("favorite icon clicked");
  };
  //////////////////////////////////////////

  return (
    <View style={styles.BlurredImageWrapper}>
      <View style={styles.priceImageView}>
        <ImageBackground 
        key={ImageURL}
        source={{uri: ImageURL}} 
        imageStyle={styles.BlurredImageBackgroundStyle}
        resizeMode="cover"
        blurRadius={20}>
          <ImageBackground
          key={ImageURL} 
          source={{uri: ImageURL}} 
          style={[styles.ImageViewContainer,{paddingTop: inset.top}]}
          imageStyle={{borderRadius:20, paddingTop: inset.top}}
          resizeMode="contain">
            {Platform.OS === "ios"  &&
              <View style={styles.topImageIconContainer}>
                <TouchableOpacity onPress={()=>router.back()}>
                  <View style={styles.iconContainer}>
                    {icon["backArrow"]({color: BlackTheme.Black})}
                    {/**<Ionicons name="chevron-back-outline" size={24} color={Colors.Black}/>*/}
                  </View>
                </TouchableOpacity>
                <View style={styles.topRightIconContainer}>
                    <TouchableOpacity onPress={share}>
                      <View style={styles.iconContainer}>
                        {icon["share"]({color: BlackTheme.Black})}
                        {/**<Ionicons name="share-outline" size={24} color={Colors.Black}/>*/}
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={search}>
                      <View style={styles.iconContainer}>
                        {icon["search"]({color: BlackTheme.Black})}
                        {/**<Ionicons name="search-outline" size={24} color={Colors.Black}/>*/}
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={favorite}>
                      <View style={styles.iconContainer}>
                        {icon["favorite"]({color: heartIsClicked? BlackTheme.ConcentratedRed: BlackTheme.Black})}
                        {/**<Ionicons name="heart-outline" size={22} color={heartIconData.color}/>*/}
                      </View>
                    </TouchableOpacity>
                </View>
              </View>}
          </ImageBackground>
        </ImageBackground>
      </View>     
    </View>
  )
}

export default ProductDetailsImageDisplay

const styles = StyleSheet.create({
    BlurredImageWrapper: {
      ...Platform.select({
          web: {
            boxShadow: "3px 3px 4px rgba(50, 50, 50, 0.5)",
            borderRadius: 20,
            resizeMode:"contain",
          },
          ios: {
            shadowColor: Colors.Black,
            shadowOffset: { width: 3, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 4,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
          },
          android: {
            elevation: 5,  
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
          }
      }),
      width: ImageWidth,
      height: ImageHeight,
    }, 
    BlurredImageBackgroundStyle:{
      ...Platform.select({
        web: {
          borderRadius: 20,
        },
        ios: {
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
        },
        android: {
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
        }
      })
    },
    ImageViewContainer: {
      ...Platform.select({
        web: {
          boxShadow: "3px 3px 4px rgba(20, 20, 20, 0.5)",
          borderRadius: 20,
          resizeMode:"contain",
        },
        ios: {
          shadowColor: Colors.Black,
          shadowOffset: { width: 3, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 4,
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
        },
        android: {
          elevation: 5,  
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
        }
      }),
      backgroundColor: "rgba(0,0,0,0)",
      width: ImageWidth,
      height: ImageHeight,
      overflow: "hidden",
    },
    topImageIconContainer: {
      justifyContent: "space-between",
      flexDirection: "row",
      paddingVertical: 10,
      paddingHorizontal: 8,
    },
    iconContainer: {
      backgroundColor: Colors.WhiteGray,
      borderRadius: 10,
      width: 40, height: 40,
      justifyContent: "center",
      alignItems: "center",
      opacity: 0.6
    },
    topRightIconContainer: {
      flexDirection: "row",
      gap: 5,
    },
    priceImageView: {
    },
    pricePromotionsContainer: {

    }
})