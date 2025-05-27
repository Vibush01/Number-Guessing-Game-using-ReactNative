import { Text, StyleSheet } from "react-native";
import Color from "../../constants/color";

function InstructionText({children, style}){
    return <Text style={[styles.inputTitle,style]}>{children}</Text>

}
export default InstructionText;

const styles = StyleSheet.create({
    
  inputTitle:{
    color:Color.accent500,
    fontSize:24,
    fontFamily:"open-sans-bold"
    
  },
})