import { View , Text , StyleSheet} from "react-native";
import Color from "../../constants/color";

function GuessLogItem({roundNum, guess}){

    return (
        <View style={styles.GuessLog}>
            <Text style={styles.item}>#{roundNum}</Text>
            <Text style={styles.item}>Opponent's Guess: {guess}</Text>
        </View>
    )

}

export default GuessLogItem;

const styles = StyleSheet.create({
    GuessLog:{
        borderColor:Color.primary800,
        borderWidth:1,
        borderRadius:40,
        padding:12,
        marginVertical:8,
        backgroundColor:Color.accent500,
        flex:"row",
        justifyContent:"space-between",
        width:"100%",
        elevation:4,
        shadowColor:"black",
        shadowOffset: {width:0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius:3,
    },
    item:{
        fontFamily:"open-sans"
    }
})