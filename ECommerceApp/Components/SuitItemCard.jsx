import {StyleSheet, Text, View, Image, TouchableOpacity, Platform } from 'react-native'
import { useEffect, useState } from 'react'
import { BlackTheme, Colors } from '@/Constants/Colors';
import { useDeviceConfig } from '@/hooks/deviceConfigProvider';
import { Link } from 'expo-router';
import { useNetworkConfig } from '@/hooks/NetworkConfigProvider';
import { icon } from '../Constants/icons';

const SuitItemCard = ({item}) => {
    const {screenDimension, contentCntDimension, Padding, Margin, colNums, deviceConfig} = useDeviceConfig();
    const {APIHOSTDB, APIHOSTIMG, NetworkConfig} = useNetworkConfig();
    const [ImageLink, setImageLink] = useState("/default");
    const [favorite, setFavorite] = useState(false);
    const width = (contentCntDimension.width - ((Padding+Margin)*(colNums))) / colNums;

    useEffect(()=>{    
        if(!APIHOSTIMG || !APIHOSTDB) return;
        setImageLink(APIHOSTIMG+item.suitimages);
    },[APIHOSTDB, APIHOSTIMG])

    // this function should be developed futher so that 
    // it updates and manipulate data in the database table
    const resetFavorites = () => {
        favorite? setFavorite(false) : setFavorite(true);
    }

    return (
        <Link href={{
            pathname:"ProductCardDetails/ProductDetails",
            params: {id: item.id},
            }}  asChild>
            <TouchableOpacity>
                <View style={[styles.itemWrapper,{ width: width, margin: Margin}]}>
                    <Image source={{uri: ImageLink}} style={[styles.suitImageStyle, {width:width, height: width/0.7}]} resizeMode="cover"/>
                    {
                        favorite?(<TouchableOpacity onPress={resetFavorites} style={{position: 'absolute', right: 10, top: 10, width: 30, height: 30, alignItems: "center", justifyContent:"center", borderRadius: 10}}>
                                    {icon["favorite"]({color: BlackTheme.ConcentratedRed})}
                                </TouchableOpacity>):
                                (<TouchableOpacity onPress={resetFavorites} style={{position: 'absolute', right: 10, top: 10, width: 30, height: 30, backgroundColor: BlackTheme.GrayWhite, alignItems: "center", justifyContent:"center", borderRadius: 10, opacity: 1}}>
                                    {icon["favorite_outline"]({color: BlackTheme.Black})}
                                </TouchableOpacity>)
                    }
                    <View style={styles.detailsContainer}> 
                        <View style={styles.priceDetails}>
                            <Text style={[styles.MediumText, {color: BlackTheme.ConcentratedRed}]}>{item.suitprice}RWF</Text>
                            <View style={styles.discountPercentageContainer}>
                                <Text style={[styles.NormalText,{fontWeight: "900"}]}>-{item.suitdiscount}%</Text>
                            </View>
                        </View>
                        <Text style={[styles.NormalText, {color: BlackTheme.MediumRed}]}>Remaining {item.suitquantity} suits</Text>
                        <Text style={ [styles.NormalText, {color: BlackTheme.MediumWhite}]} numberOfLines={2}>Blue office ordinary suit, full complete jacket and pant with an extra classic shirt made in cotton fabric</Text>
                        <View style={styles.ratingReviewContainer}>
                            <View style={styles.ratingContainer}>
                                {icon["star"]({color: BlackTheme.Gold})}    
                                {/**<Ionicons name="star-sharp" size={13} color={Colors.Gold}/>*/}
                                <Text style={styles.NormalText}>{item.suitquantity%5}</Text>
                            </View>
                            <View style={styles.reviewContainer}>
                                {icon["chatBox"]({color: BlackTheme.GrayWhite})}
                                {/**<Ionicons name="chatbubble-sharp" size={13} color={Colors.Gray}/>*/}
                                <Text style={styles.NormalText}>{item.suitquantity+4} Reviews</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </Link>
    )
}

export default SuitItemCard

const styles = StyleSheet.create({
    itemWrapper:{
        ...Platform.select({
            ios: {
                shadowColor: Colors.Black,
                shadowOpacity: 0.5,
                shadowOffset: {width: 2, height: 2},
                shadowRadius: 4,
            },
            android: {
                elevation: 5,
            },
            web : {
                boxShadow: "2px 2px 4px rgba(20, 20, 20, 0.5)",
            }
        }),
        backgroundColor: BlackTheme.ThirdLevelBackground,
        borderRadius: 20,
    },
    suitImageStyle: {
        border: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    detailsContainer:{
        paddingHorizontal: 8,
        paddingTop: 8,
        paddingBottom: 16,
    },
    TitleText: {
        fontSize: 20,
        fontWeight: "900", 
        lineHeight:24 
    },
    MediumText: {
        fontSize: 16,
        fontWeight: "700", 
        lineHeight: 18
    },
    NormalText: {
        color: BlackTheme.ConcentratedWhite,
        fontSize: 12,
        fontWeight: "bold",
        lineHeight:16
    },
    inactiveText: {
        color: BlackTheme.Gray,
        fontSize: 12,
        fontWeight: "bold",
        textDecorationLine: "line-through",
        textDecorationColor: BlackTheme.Gray,
        lineHeight:15
    },
    discountPercentageContainer: {
        borderRadius: 20, 
        backgroundColor: BlackTheme.ConcentratedRed,
        height: 16, 
        width: 50, 
        alignItems: "center", 
        justifyContent: "center"
    },
    detailsText: {
        fontSize:14, 
        fontWeight:"600",
        color: Colors.Gray,
        letterSpacing: 0.2,
    },
    priceDetails: {
        flexDirection:"row",
        justifyContent: "flex-start",
        alignItems:"center",
        gap: 5
    },

    // review containers styling
    ratingReviewContainer:{
        marginVertical: 5,
        flexDirection: "row",
        gap: 5,
    },
    reviewContainer: {
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "center",
        gap: 5,
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "center",
        gap: 5,
    },
    rateReviewText:{
        fontSize: 14,
        fontWeight: "600",
        color: Colors.Gray,
    }

})