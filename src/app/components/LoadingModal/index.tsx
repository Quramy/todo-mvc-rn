import React from "react";
import styled from "styled-components";
import { Modal, ActivityIndicator, View } from "react-native";

const LoadingModal = ({ visible }: { visible: boolean }) => {
  return (
    <LoadingBody
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={() => {}}
    >
      <LoadingInner>
        <ActivityIndicator size="large" />
      </LoadingInner>
    </LoadingBody>
  );
};

const LoadingInner = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background: #222;
  border-radius: 16px;
  opacity: 0.5;
`;

const LoadingBody = styled(Modal)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default LoadingModal;
