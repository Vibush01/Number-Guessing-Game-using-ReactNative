import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
  function pressHandler() {
    console.log("pressed");
  }

  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={pressHandler}
        style={({pressed})=> pressed? [styles.innerContainer, styles.pressed]:styles.innerContainer}
        android_ripple={{ color: "#640233" }}
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
    backgroundColor: "#72063c",
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
