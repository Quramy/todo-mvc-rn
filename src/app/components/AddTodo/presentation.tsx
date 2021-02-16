import React from "react";
import styled from "styled-components";
import { Button, Text, View, TextInput, Dimensions } from "react-native";

export type Props = {
  todoTitle: string;
  onSubmit: () => any;
  onChangeTitle: (v: string) => any;
};

export const Presentation = ({ todoTitle, onSubmit, onChangeTitle }: Props) => {
  return (
    <Section>
      <InlineInput>
        <Label>やること</Label>
        <TodoTitle
          autoFocus
          value={todoTitle}
          onChangeText={onChangeTitle}
          placeholder="ここに何か書いてね"
        />
      </InlineInput>
      <ButtonArea>
        <Button onPress={onSubmit} title="追加する" />
      </ButtonArea>
    </Section>
  );
};

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
