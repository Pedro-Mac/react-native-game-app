import { StyleSheet, ImageBackground } from "react-native";
import StartGame from "./screens/startGame";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient style={styles.container} colors={["#ddb52f", "#4e0329"]}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backgroundImage}
      >
        <StartGame />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.1,
  },
});
