import { createContext, useContext, useEffect, useState } from 'react'
import { Dimensions } from 'react-native'

const DeviceContext = createContext();

const DeviceConfigProvider = ({children}) => {

    const [Padding, setPadding] = useState(4);
    const [Margin, setMargin] = useState(4);
    const [screenDimension, setScreenWidth] = useState({width: Dimensions.get("window").width, height: Dimensions.get("window").height});
    const [contentCntDimension, setContentCntDimension] = useState({width: screenDimension.width, height: screenDimension.height});
    const [colNums, setColNums] = useState(0);

    const deviceConfig = () => {
        // setting column numbers
        if(screenDimension.width<600) setColNums(2);
        else if(screenDimension.width<900) setColNums(3);
        else setColNums(5);
    }

    
    useEffect(()=>{
        setContentCntDimension({width : (contentCntDimension.width-Padding), height: contentCntDimension.height});
        console.log(Dimensions.get("window").width, Dimensions.get("window").height, contentCntDimension);
    }, [colNums])

    // this are initiates our device configurations
    useEffect(() => {
        deviceConfig();
    }, []);
        
    return (
        <DeviceContext.Provider value={{screenDimension, contentCntDimension, Padding, Margin, colNums, deviceConfig}}>
        {children}
        </DeviceContext.Provider>
    )
}

export default DeviceConfigProvider;
export const useDeviceConfig = () => useContext(DeviceContext);