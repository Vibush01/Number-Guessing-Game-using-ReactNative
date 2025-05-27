import { Text ,StyleSheet } from "react-native";


import Color from "../constants/color";

function Title({children}){
    return <Text style={styles.title}>{children}</Text>
}
export default Title;

const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:"bold",
        color: Color.accent500,
        padding:12,
        textAlign:'center',
        borderWidth:2,
        borderColor:Color.accent500,
        margin:12,
    }
})