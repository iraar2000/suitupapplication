import { StyleSheet, Text, View, Platform, TouchableOpacity } from 'react-native'
import { BlackTheme } from '@/Constants/Colors'
import { icon } from '@/Constants/icons';
import { Link } from 'expo-router';


const CustomSuitLinks = ({screenWidth}) => {
    return (
      <Link href={"ProductCardDetails/MeasurementForm"} asChild>
        <TouchableOpacity>
          <View style={[styles.customSuitsLinkContainer,{width: screenWidth - 16}]}>
              <View style={styles.iconContainer}>
                {icon["tapeMeasure"]({color: BlackTheme.GrayWhite})}
                {/**<Icons name="ruler" size={25} color={BlackTheme.GrayWhite}/>*/}
              </View>
              <View style={styles.linkerTextContainer}>  
              <Text style={styles.linkerHeaderText}>Custom made suit</Text>
              <Text style={styles.linkerMessageText}>if you want a custom made suit get measured here</Text>
              </View>
          </View>
        </TouchableOpacity>
      </Link>
    )
}

export default CustomSuitLinks

const styles = StyleSheet.create({
    customSuitsLinkContainer: {
      ...Platform.select({
        web: { marginHorizontal: 24},
        ios: {marginHorizontal: 8},
        android: {marginHorizontal: 8}
      }),
      marginVertical: 8,
      backgroundColor: BlackTheme.SecondLevelBackground,
      borderRadius: 20,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: BlackTheme.Gray,
      flexDirection: "row",
      padding: 8,
      gap: 8
    },
    iconContainer: {
      width: 40, height: 40,
      backgroundColor: BlackTheme.GreenColor,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 2,
      borderColor: BlackTheme.GreenColor,
    },
    linkerHeaderText: {
      fontSize: 20,
      lineHeight: 24,
      fontWeight: "900",
      color: BlackTheme.GreenColor
    },
    linkerMessageText: {
      fontSize: 12,
      lineHeight: 15,
      fontWeight: "500",
      color: BlackTheme.MediumWhite
    }
})