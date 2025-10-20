import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BlackTheme } from '@/Constants/Colors'
import SuitItemCard from '@/Components/SuitItemCard';
import { useDeviceConfig } from '../../hooks/deviceConfigProvider';

const SimilarProducts = ({similarSuits, onSelectedItem, flatlist=false}) => {
  const {screenDimension, contentCntDimension, Padding, Margin, colNums, deviceConfig} = useDeviceConfig();
  return (
    <View style={[styles.SimilarProdContainer, {padding: Padding}]}>
      <Text style={styles.ContainerTitle}>Similar Suits</Text>
      <View style={[styles.ProductListContainer, {width: contentCntDimension.width}]}>
        {
          flatlist? (
            <FlatList
              key={colNums}
              data={similarSuits}
              numColumns={colNums}
              keyExtractor={(item) => item.id.toString()} 
              renderItem={({index, item}) => (
                  <SuitItemCard item={item}/>
              )}
            />) : (
              <View style={[styles.itemWrapper, {flex: 1}]}>
                {similarSuits.map((item, index)=>(
                  <TouchableOpacity key={index} onPress={() => onSelectedItem(item.id)}>
                    <SuitItemCard item={item}/>
                  </TouchableOpacity>
                ))}
              </View>
            )
        }
      </View>
    </View>
  )
}

export default SimilarProducts

const styles = StyleSheet.create({
    SimilarProdContainer: {
        backgroundColor: BlackTheme.SecondLevelBackground,
        borderRadius: 20,
        marginVertical: 8
    },
    ContainerTitle: {
        marginHorizontal: 24,
        marginVertical: 16,
        fontSize: 20,
        fontWeight: "900",
        lineHeight: 24,
        color: BlackTheme.ConcentratedWhite
    },
    itemWrapper: {
      width: "100%",
      flexDirection: "row",
      flexWrap: "wrap",
    }
})