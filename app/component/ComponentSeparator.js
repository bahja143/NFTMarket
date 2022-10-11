import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ComponentSeparator() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    height: 14,
  },
});
