import { View, Text, Platform } from 'react-native'
import { API_HOST_DEVICE_GISENYI, API_HOST_DEVICE_KICUKIRO, API_HOST_DEVICE_MYNETWORK, API_HOST_DEVICE_NORSKEN, API_HOST_WEB } from '../Constants/apiHosts';
import { createContext, useContext, useEffect, useState } from 'react';


const NetworkContext = createContext();

const NetworkConfigProvider = ({children}) => {

    const [APIHOSTDB, setApiHostDB] = useState("");
    const [APIHOSTIMG, setApiHostIMG] = useState("");

    const NetworkConfig = () => {
        if(Platform.OS === "web") {
          setApiHostDB(API_HOST_WEB.IPV4DB.toString());
          setApiHostIMG(API_HOST_WEB.IPV4IMG.toString())
        }
        else if(Platform.OS === "ios") {
          setApiHostDB(API_HOST_DEVICE_MYNETWORK.IPV4DB.toString());
          setApiHostIMG(API_HOST_DEVICE_MYNETWORK.IPV4IMG.toString());
        };
    };

    useEffect(() => {
      NetworkConfig();
    }, [APIHOSTDB, APIHOSTIMG]);

    
    

  return (
    <NetworkContext.Provider value={{APIHOSTDB, APIHOSTIMG, NetworkConfig}}>
      {children}
    </NetworkContext.Provider>
  )
}

export default NetworkConfigProvider
export const useNetworkConfig = () => useContext(NetworkContext);