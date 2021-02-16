import React, { useState } from "react";
import styled from "styled-components";
import { Button, Text, View, TextInput, Dimensions } from "react-native";
import { postTodo } from "../../apiClient";

const AddTodo = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const onPressSubmit = async () => {
    await postTodo({ title: todoTitle });
    setTodoTitle("");
  };
  return (
    <Section>
      <InlineInput>
        <Label>やること</Label>
        <TodoTitle
          autoFocus
          value={todoTitle}
          onChangeText={setTodoTitle}
          placeholder="ここに何か書いてね"
        />
      </InlineInput>
      <ButtonArea>
        <Button onPress={onPressSubmit} title="追加する" />
      </ButtonArea>
    </Section>
  );
};

export default AddTodo;

const Section = styled(View)`
  flex: 1;
  align-items: center;
`;

const InlineInput = styled(View)`
  width: ${Dimensions.get("window").width};
  display: flex;
  background: #fff;
  flex-direction: row;
  align-items: center;
  padding-left: 8;
  padding-right: 8;
`;

const Label = styled(Text)`
  width: 96;
`;

const TodoTitle = styled(TextInput)`
  height: 48;
`;

const ButtonArea = styled(View)`
  margin-top: 16;
`;
