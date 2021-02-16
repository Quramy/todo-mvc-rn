import React, { useState } from "react";
import { StyleSheet, Button, View, TextInput } from "react-native";
import { postTodo } from "../../apiClient";

const AddTodo = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const onPressSubmit = async () => {
    await postTodo({ title: todoTitle });
    setTodoTitle("");
  };
  return (
    <View style={styles.container}>
      <TextInput
        autoFocus
        value={todoTitle}
        onChangeText={setTodoTitle}
        placeholder="ここに何か書いてね"
      />
      <Button onPress={onPressSubmit} title="追加する" />
    </View>
  );
};

export default AddTodo

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
