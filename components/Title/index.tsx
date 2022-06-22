import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalColors } from "../../styles/colors";

interface Props {
  children: string;
}

const Title = ({ children }: Props) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    color: globalColors.accent500,
    borderWidth: 2,
    borderColor: globalColors.accent500,
    padding: 12,
    borderRadius: 8,
  },
});
