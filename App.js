import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screen/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screen/GameScreen";
import { useState } from "react";
import Color from "./constants/color";

export default function App() {
  const [userNum, setUserNum] = useState();

  function pickedNum(pickedNum ){
    setUserNum(pickedNum)
  }
  let screen = <StartGameScreen onPickNum={pickedNum}/>;

  if(userNum){
    screen= <GameScreen/>
  }
  return (
    <LinearGradient
      colors={[Color.primary800, Color.accent500]}
      style={styles.mainContainer}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.mainContainer}
        imageStyle={styles.backgroungImage}
      >
        <SafeAreaView style={[styles.mainContainer, styles.safeView]}>
          {screen}
        </SafeAreaView>
        
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  backgroungImage:{
    opacity:0.15
  },
  safeView:{
    marginTop:34
  }
  
});
