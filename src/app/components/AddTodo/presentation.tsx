import React from "react";
import styled from "styled-components";
import { Button, Text, View, TextInput, Dimensions } from "react-native";
import LoadingModal from "../LoadingModal";
import Toast from '../Toast';

export type Props = {
  todoTitle: string;
  isLoading: boolean;
  showCreated: boolean;
  onSubmit: () => any;
  onChangeTitle: (v: string) => any;
};

export const Presentation = ({
  todoTitle,
  onSubmit,
  isLoading,
  showCreated,
  onChangeTitle
}: Props) => {
  return (
    <Section>
      <LoadingModal visible={isLoading} />
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
        <Button onPress={onSubmit} disabled={isLoading} title="追加する" />
      </ButtonArea>
      {showCreated && ( <Toast message="できたよ" />)}
    </Section>
  );
};

const Section = styled(View)`
  flex: 1;
  align-items: center;
`;

const InlineInput = styled(View)`
  width: ${Dimensions.get("window").width}px;
  display: flex;
  background: #fff;
  flex-direction: row;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
`;

const Label = styled(Text)`
  width: 96px;
`;

const TodoTitle = styled(TextInput)`
  height: 48px;
`;

const ButtonArea = styled(View)`
  margin-top: 16px;
  margin-bottom: 32px;
`;
