import { TextInput, StyleSheet } from "react-native";
import { Colors } from "../Constants/Colors";

const InputField = (props) => {
    return (
        <TextInput 
            style={style.InputField}
            {...props}
        />
    )
};

export default InputField;

const style = StyleSheet.create({
    InputField: {
        backgroundColor: Colors.White,
        paddingVertical: 12,
        paddingHorizontal: 18,
        alignSelf: 'stretch',
        borderRadius:5,
        color:Colors.Black,
        fontSize:16,
        marginBottom: 10
    }
});

