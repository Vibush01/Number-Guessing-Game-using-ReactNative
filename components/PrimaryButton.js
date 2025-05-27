import { View, Text, Pressable, StyleSheet } from "react-native";
import Color from '../constants/color'

function PrimaryButton({ children, onPress }) {
 

  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={onPress}
        style={({pressed})=> pressed? [styles.innerContainer, styles.pressed]:styles.innerContainer}
        android_ripple={{ color: Color.primary600 }}
      >
        <Text style={styles.button}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  innerContainer: {
    backgroundColor: Color.primary500,
    paddingHorizontal: 16,
    paddingVertical: 8, 
    elevation: 2,
  },
  button: {
    color: "white",
    textAlign: "center",
    // fontSize:18,
  },
  pressed:{
    opacity:0.75,

  }
});
