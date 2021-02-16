import React, { useState } from "react";
import { postTodo } from "../../apiClient";
import { Presentation, Props } from "./presentation";

export default () => {
  const [todoTitle, setTodoTitle] = useState("");

  const submit = async () => {
    await postTodo({ title: todoTitle });
    setTodoTitle("");
  };

  const props: Props = {
    todoTitle,
    onChangeTitle: setTodoTitle,
    onSubmit: submit
  };
  return <Presentation {...props} />;
};
