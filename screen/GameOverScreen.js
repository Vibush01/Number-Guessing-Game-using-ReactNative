import { View, Image, StyleSheet ,Text  } from "react-native";

import PrimaryButton from "../components/ui/PrimaryButton"
import Title from "../components/ui/Title";
import Color from "../constants/color";

function GameOverScreen({roundNumber, userNumber, onStartNewGame}){
    return (
        <View style={styles.mainContainer}>
            <Title>Game Over!</Title>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/images/success.png')} style={styles.image}/>
            </View>
            <Text 
            style={styles.summaryText}>
            Your phone needed 
            <Text style={styles.highlight }> {roundNumber}</Text> rounds to guess the number{' '} 
            <Text style={styles.highlight }>{userNumber}</Text>.
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>        
        </View>
    )

}

export default GameOverScreen;

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        padding:24,
        justifyContent:"center",
        alignItems:"center",
    },
    imageContainer:{
        height:300,
        width:300,
        borderRadius:150,
        borderWidth:3,
        borderColor: Color.primary800,
        overflow:"hidden",
        margin:36,
        
    },
    image:{
        width: '100%',
        height: '100%',

    },
    summaryText:{
        fontFamily:"open-sans",
        fontSize:24,
        textAlign:"center",
        marginBottom:24,
    },
    highlight:{
        fontFamily:"open-sans-bold",
        color: Color.primary500
    }

})