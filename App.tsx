/* eslint-disable quotes */
import React from "react";
import {View, StyleSheet} from "react-native";
import RootNavigation from "./navigation/RootNavigation";

export default function App(): JSX.Element {
  return (
    <View style={styles.flex}>
      <RootNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
