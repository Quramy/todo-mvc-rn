import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TodoList = () => {
  return (
    <View style={styles.container}>
      <Text>TODO: 一覧表示できるようにする</Text>
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
