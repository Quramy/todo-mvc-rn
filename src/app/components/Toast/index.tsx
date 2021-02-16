import React from "react";
import styled from "styled-components";
import { Text, View, Dimensions } from "react-native";

type Props = {
  message: string;
};

export default ({ message }: Props) => {
  return (
    <Wrapper>
      <Message>{message}</Message>
    </Wrapper>
  );
};

const Wrapper = styled(View)`
  width: ${Dimensions.get("window").width - 32}px;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 8px;
  background: green;
`;

const Message = styled(Text)`
  color: #fff;
`;
