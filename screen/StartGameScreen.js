import { TextInput, View, StyleSheet,Alert,Text } from "react-native";
import { useState } from "react";

import PrimaryButton from "../components/ui/PrimaryButton";
import Color from "../constants/color";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({onPickNum}) {
  const [enteredNum,setenteredNum] = useState('');
  function numInput(enteredText){
    setenteredNum(enteredText);
  }
  function resetInput(){
    setenteredNum('');
  }

  function confirmInput(){
    const chooseNumber = parseInt(enteredNum);
    if(isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99 ){
      Alert.alert('Invalid Number!','Number has to be a Number between 1 to 99', [{text:'Okay', style:'destructive', onPress: resetInput}])
      return;      
    }
    onPickNum(chooseNumber);
  }
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numInput}
        value={enteredNum}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInput}>Confirm</PrimaryButton>
        </View>
      </View>
    </Card>
    </View>
    
  );
}
const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    marginTop:100,
    alignItems:"center",

  },
  numberInput: {
    height: 50,
    width: 50,
    textAlign: "center",
    fontSize: 26,
    borderBottomColor: Color.accent500,
    borderBottomWidth: 2,
    color: Color.accent500,
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
