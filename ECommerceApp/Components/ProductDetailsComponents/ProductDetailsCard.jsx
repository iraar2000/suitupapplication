import { StyleSheet, Text, View } from 'react-native'
import { BlackTheme } from '@/Constants/Colors'
import { icon } from '@/Constants/icons';

const ProductDetailsCard = ({screenWidth, currentPrice, PreviousPrice, discount, itemLeft, rating, reviews}) => {

    // these text will get updated dynamically as the products get bought
    let progressbarText = `only ${itemLeft} left`;
    let progressbarTextPosition = ((screenWidth)/2 - 32) - (progressbarText.length / 2);

    return (
        <View style={styles.ProductDetailsContainer}>
            <Text style={styles.currentPrice}>{currentPrice} RWF</Text>
            <View style={styles.previousPriceContainer}>
                <Text style={styles.PreviousPrice}>{PreviousPrice} RWF</Text>
                <View style={styles.DiscountPercentageContainer}>
                  <Text style={styles.NormalText}>Discount: </Text>
                  {discount < 0 ? <Text style={styles.PercentageText}>{discount}%</Text> : 
                  <Text style={styles.PercentageText}>+{discount}%</Text>}
                </View>
            </View>
            <Text style={[styles.NormalText, {marginTop: 8, marginBottom: 4}]} numberOfLines={2}>Blue casual suit, comes with a white shirt and orange tie for office its customizable for every person.</Text>
            <View style={styles.ProgressBar}>
                <View style={styles.baseProgressorContainer}>
                  {/** TODO the width here should be adjusted in percentages the width is total screen width - 32 */}
                  <View style={[styles.progressorContainer, {width:50}]}>
                  </View>
                </View>
                <Text style={[styles.NormalText, {fontWeight: "900", position: "absolute", left:progressbarTextPosition}]}>{progressbarText}</Text>
            </View>
            <View style={styles.ratingReviewContainer}>
                <View style={styles.ratingContainer}>
                  {icon["star"]({color: BlackTheme.Gold})}
                  {/**<Ionicons name="star" size={16} color={BlackTheme.Gold}/>*/}
                  <Text style={styles.NormalText}>{rating}</Text>
                </View>
                <View style={styles.reviewContainer}>
                  {icon["chatBox"]({color: BlackTheme.GrayWhite})}
                  {/**<Ionicons name="chatbubble" size={16} color={BlackTheme.GrayWhite}/>*/}
                  <Text style={styles.NormalText}>{reviews} Reviews</Text>
                </View>
            </View>
        </View>
    )
}

export default ProductDetailsCard

const styles = StyleSheet.create({
    ProductDetailsContainer: {
      padding: 16,
    },
    currentPrice: {
      fontSize: 16,
      lineHeight: 19,
      fontWeight: "700",
      color: BlackTheme.ConcentratedRed,
    },
    previousPriceContainer: {
      flexDirection: "row",
      gap: 8,
    },
    PreviousPrice: {
      fontSize: 16,
      fontWeight: "900",
      lineHeight: 18,
      textDecorationLine: "line-through",
      textDecorationColor: BlackTheme.Gray,
      color: BlackTheme.Gray,
    },
    DiscountPercentageContainer: {
      backgroundColor: BlackTheme.ConcentratedRed,
      alignItems: "center",
      flexDirection: "row",
      borderRadius: 20,
      paddingHorizontal: 16
    },
    NormalText: {
      color: BlackTheme.MediumWhite,
      fontWeight: "500",
      fontSize: 12,
      lineHeight: 15,
    },
    PercentageText: {
      color: BlackTheme.ConcentratedWhite,
      fontWeight: "900",
      fontSize: 12,
      lineHeight: 15,
    },
    baseProgressorContainer : {
      backgroundColor: BlackTheme.GreenColor,
      borderRadius: 20,
      height: 15,
    },
    progressorContainer: {
      backgroundColor: BlackTheme.ConcentratedRed,
      borderRadius: 20,
      alignItems: "center",
      height: 15
    },
    ProgressBar: {
      justifyContent: "center",
      marginVertical: 4,
    },
    ratingReviewContainer: {
      flexDirection: "row",
      verticalAlign:"middle",
      gap: 8,
      marginVertical: 4,
    },
    ratingContainer: {
      flexDirection: "row",
      alignItems: "baseline",
      gap: 4
    },
    reviewContainer: {
      flexDirection: "row",
      alignItems: "baseline",
      gap: 4
    }
})