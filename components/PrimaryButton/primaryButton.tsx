import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onPress?: () => void;
}

const PrimaryButton = ({ children, onPress }: Props) => {
  return (
    <View style={styles.btnOutterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.btnInnerContainer, styles.pressed]
            : styles.btnInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: "#fff" }}
      >
        <Text style={styles.btnText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  btnInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontWeight: "600",
  },
  btnOutterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  pressed: {
    opacity: 0.75,
  },
});
