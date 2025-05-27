import { TextInput, View, StyleSheet,Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Color from "../constants/color";

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
    <View style={styles.inputContainer}>
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
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: Color.primary700,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 6,
    shadowRadius: 0.35,
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
