import { View, StyleSheet } from "react-native";
import Color from "../../constants/color";

function Card({children}){
    return <View style={styles.card}>
        {children}
    </View>

}
export default Card;

const styles = StyleSheet.create({
    card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    backgroundColor: Color.primary700,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 6,
    shadowRadius: 0.35,
  },
})