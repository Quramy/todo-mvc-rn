import React, { useState, useCallback } from "react";
import { Presentation, Props } from "./presentation";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { fetchTodoList } from "../../apiClient";
import { Task } from "../../../shared/models/task";

export default () => {
  const navigation = useNavigation();
  const [todoList, setTodoList] = useState<Task[]>([]);
  const fetchTodo = useCallback(() => {
    fetchTodoList().then(todoList => setTodoList(todoList));
  }, []);
  useFocusEffect(fetchTodo);
  const props: Props = {
    todoList,
    onSelect: ({ id }) => {
      navigation.navigate("タスク編集", { id });
    }
  };
  return <Presentation {...props} />;
};
