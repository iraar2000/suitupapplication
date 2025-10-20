import { View, StyleSheet, LayoutChangeEvent} from "react-native";
import TabBarButton from "./TabBarButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "../Constants/Colors";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"
import { useEffect, useState } from "react";

export default function TabBar({state, descriptors, navigation}){

    const [Dimensions, setDimensions] = useState({height:2, width:20});
    const buttonWidth = Dimensions.width / state.routes.length;

    useEffect(()=>{
        tabPositionX.value = withTiming(buttonWidth*state.index, {
            duration:200,
        });
    }, [state.index])

    const onTabBarLayout = (e: LayoutChangeEvent) => {
        setDimensions({
            height: e.nativeEvent.layout.height,
            width: e.nativeEvent.layout.width
        });
    };

    const tabPositionX = useSharedValue(0);
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{translateX: tabPositionX.value}]
        }
    });

    return(
        <View onLayout={onTabBarLayout} style={style.TabBarView}>
            <Animated.View style={[animatedStyle, {
                position:"absolute",
                top: 0,
                left: buttonWidth/4,
                height: 2,
                width: buttonWidth/2,
                backgroundColor: Colors.Primary
            }]}/>
            {state.routes.map((route, index)=>{
                const { options } = descriptors[route.key];
                const label = options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;
                const isFocused = state.index  === index;
                
                const onPress = () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if(!isFocused && !event.defaultPrevented){
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    const event = navigation.emit({
                        type: "tabLongPress",
                        target: route.key
                    });
                };

                return <TabBarButton key={route.name} onPress={onPress} onLongPress={onLongPress} label={label} routeName={route.name} isFocused={isFocused}/>
            })}
        </View>
    )
}

const style = StyleSheet.create({
    TabBarView:{
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 20, // avoid being hidden
        backgroundColor: Colors.White,
    },
})


