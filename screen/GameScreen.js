import { Text, View, StyleSheet, Alert } from "react-native";
import { useState } from "react";

import Title from "../components/ui/Title";
import NumContainer from "../components/game/NumContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    
    return rndNum;
  }
}
let minBoundary = 1;
let maxBoundary = 100;
function GameScreen({ userNumber }) {
  const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber);
  const [curGuess, setCurGuess] = useState(initialGuess);

  function nextGuessNum(direction){
    if((direction === 'lower' && curGuess < userNumber) || (direction === 'greater' && curGuess > userNumber)){
        Alert.alert("Don't lie!","You know this is wrong...",[ { text: 'sorry!', style: 'cancel'}]); 
        return;
    }
    if(direction === 'lower'){
        maxBoundary=curGuess;
    }else{
        minBoundary= curGuess +1;        
    }
    const newRndGuess = generateRandomBetween(minBoundary,maxBoundary,curGuess);
    setCurGuess(newRndGuess);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumContainer>{curGuess}</NumContainer>
      <View>
        <Text>Higher or lower?</Text>
        <View style={styles.buttonsContainer}>
          <PrimaryButton onPress={nextGuessNum.bind(this, 'lower')}>-</PrimaryButton>
          <PrimaryButton onPress={nextGuessNum.bind(this, 'greater')}>+</PrimaryButton>
        </View>
      </View>
      <View></View>
    </View>
  );
}
export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
});
