import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { use, useState } from "react";
import AppLoading from "expo-app-loading";

import GameScreen from "./screen/GameScreen";
import Color from "./constants/color";
import StartGameScreen from "./screen/StartGameScreen";
import GameOverScreen from "./screen/GameOverScreen";
import { useFonts } from "expo-font";

export default function App() {
  const [userNum, setUserNum] = useState();
  const [gameOver, setGameOver] = useState(true);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if(!fontsLoaded){
    return <AppLoading/> 
  }

  function pickedNum(pickedNum ){
    setUserNum(pickedNum);
    setGameOver(false);
  } 
  function gameOverHandler(){
    setGameOver(true)
  }
  let screen = <StartGameScreen onPickNum={pickedNum}/>;

  if(userNum){
    screen= <GameScreen userNumber={userNum} onGameOver={gameOverHandler}/>
  }

  if(gameOver && userNum){
    screen = <GameOverScreen/>
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
