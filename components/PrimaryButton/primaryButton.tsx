import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onPress: () => void;
}

const PrimaryButton = ({ children, onPress }: Props) => {
  return (
    <Pressable onPress={onPress}>
      <View>
        <Text>{children}</Text>
      </View>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({});
