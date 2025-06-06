import {  View, StyleSheet, Alert, FlatList } from "react-native";
import { useState, useEffect } from "react";
import {Ionicons} from "@expo/vector-icons" 

import Title from "../components/ui/Title";
import NumContainer from "../components/game/NumContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import GuessLogItem from "../components/game/GuessLogItem";

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


function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [curGuess, setCurGuess] = useState(initialGuess);
  const [guessRound, setGuessRound] = useState([initialGuess]);

  useEffect(()=>{
    if(curGuess===userNumber){
        onGameOver(guessRound.length);
    }
  },[ curGuess, userNumber, onGameOver]);

  useEffect(()=>{
     minBoundary=1;
     maxBoundary=100;
  },[]); 


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
    setGuessRound(prevGuessRounds => [ newRndGuess, ...prevGuessRounds])
  }
  const guessRoundListLength = guessRound.length;

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumContainer>{curGuess}</NumContainer>
      <Card>
        <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessNum.bind(this, 'lower')}><Ionicons name="remove" size={24} color="white"/></PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessNum.bind(this, 'greater')}><Ionicons name="add" size={24} color="white"/></PrimaryButton>
          </View>           

        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList 
        data={guessRound} 
        renderItem={(itemData)=>(
        <GuessLogItem 
        roundNum={guessRoundListLength -itemData.index} 
        guess={itemData.item}
        />
      )}
        keyExtractor={(item) => item}
        />
      </View>
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
  instructionText:{
    marginBottom:24,
  },
  buttonContainer:{
    flex:1
  },
  listContainer:{
    flex:1,
    padding:16,

  }
});
