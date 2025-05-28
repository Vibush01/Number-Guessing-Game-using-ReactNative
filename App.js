import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

import GameScreen from "./screen/GameScreen";
import Color from "./constants/color";
import StartGameScreen from "./screen/StartGameScreen";
import GameOverScreen from "./screen/GameOverScreen";

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNum, setUserNum] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [guessRound, setGuessRound] = useState();

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  // Hide splash screen when fonts are loaded
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  function pickedNum(pickedNum) {
    setUserNum(pickedNum);
    setGameOver(false);
  }

  function gameOverHandler(numberOfRounds) {
    setGameOver(true);
    setGuessRound(numberOfRounds);
  }

  function startNewGameHandler() {
    setUserNum(null);
    setGuessRound(0);
  }

  let screen = <StartGameScreen onPickNum={pickedNum} />;

  if (userNum) {
    screen = <GameScreen userNumber={userNum} onGameOver={gameOverHandler} />;
  }

  if (gameOver && userNum) {
    screen = (
      <GameOverScreen
        userNumber={userNum}
        roundNumber={guessRound}
        onStartNewGame={startNewGameHandler}
      />
    );
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
  backgroungImage: {
    opacity: 0.15,
  },
  safeView: {
    marginTop: 34,
  },
});