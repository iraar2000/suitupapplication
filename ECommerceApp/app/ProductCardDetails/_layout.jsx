import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import NetworkConfigProvider from '../../hooks/NetworkConfigProvider'
import DeviceConfigProvider from '../../hooks/deviceConfigProvider'

const ProductCardDetailsLayout = () => {
  return (
    
    <NetworkConfigProvider>
        <DeviceConfigProvider>
            <Stack>
                <Stack.Screen name='ProductDetails'/>
                <Stack.Screen name='MeasurementForm'/>
            </Stack>
        </DeviceConfigProvider>
    </NetworkConfigProvider>
  )
}

export default ProductCardDetailsLayout