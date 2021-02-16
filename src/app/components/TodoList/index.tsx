import React from "react";
import styled from "styled-components";
import { Text, View } from "react-native";

const TodoList = () => {
  return (
    <Section>
      <Text>TODO: 一覧表示できるようにする</Text>
    </Section>
  );
};

export default TodoList;

const Section = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;
