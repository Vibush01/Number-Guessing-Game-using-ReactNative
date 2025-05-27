import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screen/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screen/GameScreen";
import { useState } from "react";

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
      colors={["#4e0329", "#ddb52f"]}
      style={styles.mainContainer}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.mainContainer}
        imageStyle={styles.backgroungImage}
      >
        <SafeAreaView style={styles.mainContainer}>
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
  }
});
