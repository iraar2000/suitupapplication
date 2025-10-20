import { Tabs } from 'expo-router'
import TabBar from '../../Components/TabBar'
import { Colors } from '../../Constants/Colors'
import DeviceConfigProvider from '../../hooks/deviceConfigProvider'
import NetworkConfigProvider from '../../hooks/NetworkConfigProvider'

const HomeLayout= () => {
  return (
    <NetworkConfigProvider>
      <DeviceConfigProvider>
        <Tabs tabBar={props => <TabBar {...props}/>} screenOptions={{headerShown:false}}>
          <Tabs.Screen name='index' options={{
            title:"home",
            sceneStyle:{backgroundColor:Colors.White}
          }}/>
          
          <Tabs.Screen name="explore" options={{
            title:"explore",
          }}/>

          
          <Tabs.Screen name='notification' options={{
            title:"notification",
          }}/>

          
          <Tabs.Screen name='cart' options={{
            title:"cart",
          }}/>

          
          <Tabs.Screen name='profile' options={{
            title:"profile",
          }}/>
        </Tabs>
      </DeviceConfigProvider>
    </NetworkConfigProvider>
  )
}

export default HomeLayout