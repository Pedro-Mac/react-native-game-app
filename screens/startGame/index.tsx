import { StyleSheet, Text, View, TextInput, Alert } from "react-native";
import React, { ReactNode, useState } from "react";
import PrimaryButton from "../../components/PrimaryButton/primaryButton";

const StartGame = () => {
  const [gameValue, setGameValue] = useState("");

  const handleValueChange = (text: string) => {
    setGameValue(text);
  };

  const resetInput = () => {
    setGameValue("");
  };

  const confirmInput = () => {
    const gameNumber = Number(gameValue);
    if (!isNaN(gameNumber) && gameNumber > 0 && gameNumber <= 99) {
      console.log("Alright value");
    } else {
      Alert.alert("Invalid number", "Number has to be between 1 and 99", [
        {
          text: "Okay",
          style: "destructive",
          onPress: resetInput,
        },
      ]);
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        keyboardType="number-pad"
        maxLength={2}
        autoCorrect={false}
        autoCapitalize="none"
        value={gameValue}
        onChangeText={handleValueChange}
      />
      <View style={styles.btnsContainer}>
        <View style={styles.btnContainer}>
          <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
        </View>
        <View style={styles.btnContainer}>
          <PrimaryButton onPress={confirmInput}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGame;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    backgroundColor: "#4e063c",
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: "center",
    justifyContent: "center",
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
  btnsContainer: {
    flexDirection: "row",
  },
  btnContainer: { flex: 1 },
});
