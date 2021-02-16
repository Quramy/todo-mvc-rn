import React, { useState } from "react";
import { postTodo } from "../../apiClient";
import { Presentation, Props } from "./presentation";

export default () => {
  const [todoTitle, setTodoTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showCreated, setShowCreated] = useState(false);

  const submit = async () => {
    if (!todoTitle.trim()) return;
    // setIsLoading(true);
    await postTodo({ title: todoTitle });
    setTodoTitle("");
    // setIsLoading(false);
    setShowCreated(true);
  };

  const props: Props = {
    todoTitle,
    isLoading,
    showCreated,
    onChangeTitle: setTodoTitle,
    onSubmit: submit
  };
  return <Presentation {...props} />;
};
