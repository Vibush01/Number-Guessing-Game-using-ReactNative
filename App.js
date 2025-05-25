import { StyleSheet} from 'react-native';
import StartGameScreen from './screen/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient colors={['#4e0329','#ddb52f']} style={styles.mainContainer}>
      <StartGameScreen/>
    </LinearGradient>
    
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
  }  
});
