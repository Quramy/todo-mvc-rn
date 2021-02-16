import React from "react";
import styled from "styled-components";
import { SectionList, Text, View, TouchableHighlight } from "react-native";
import { Task } from "../../../shared/models/task";

type SelectHandler = ({ id }: { id: string }) => void;

type DataType = {
  id: string;
  title: string;
};

export type Props = {
  todoList: Task[];
  onSelect: SelectHandler;
};

function grouping(
  todoList: Task[]
): { title: string; data: DataType[] }[] {
  const obj = todoList.reduce(
    (acc, todoItem) => ({
      ...acc,
      [todoItem.status]: [...(acc[todoItem.status] ?? []), todoItem]
    }),
    {} as Record<string, Task[]>
  );
  return Object.keys(obj).map(k => ({ title: k, data: obj[k] }));
}

// const dummyData: { title: string; data: DataType[] }[] = [
//   { title: "todo", data: [{ id: "001", title: "Buy the milk" }] },
//   {
//     title: "doing",
//     data: [
//       { id: "011", title: "Buy the milkBuy" },
//       { id: "012", title: "Buy the milk2" }
//     ]
//   },
//   { title: "done", data: [{ id: "021", title: "Buy the milk" }] }
// ];

const RenderItem = ({
  item: { title, id },
  index,
  onSelect
}: {
  item: DataType;
  index: number;
  onSelect: SelectHandler;
}) => {
  return (
    <TodoItemLine
      index={index}
      onPress={() => onSelect({ id })}
      underlayColor="#ddd"
    >
      <Text numberOfLines={1}>{title}</Text>
    </TodoItemLine>
  );
};

const RenderSectionHeader = ({ section }: { section: { title: string } }) => {
  return (
    <GroupWrapper>
      <GroupHeading>{section.title}</GroupHeading>
    </GroupWrapper>
  );
};

export const Presentation = ({ todoList, onSelect }: Props) => {
  return (
    <Section>
      <SectionList
        sections={grouping(todoList)}
        keyExtractor={(item: DataType) => item.id}
        renderItem={props => <RenderItem onSelect={onSelect} {...props} />}
        renderSectionHeader={RenderSectionHeader}
      />
    </Section>
  );
};

const GroupWrapper = styled(View)`
  padding-left: 8px;
  padding-right: 8px;
  margin-top: 24px;
  margin-bottom: 8px;
`;

const GroupHeading = styled(Text)`
  font-size: 22px;
  font-weight: 600;
`;

const TodoItemLine = styled(TouchableHighlight)`
  background: #fff;
  padding: 12px 8px;
  border-color: #ddd;
  border-top-width: ${({ index }: { index: number }) =>
    index !== 0 ? 1 : 0}px;
`;

const Section = styled(View)``;
