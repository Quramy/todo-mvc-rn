import { Task } from "../shared/models/task";

export type PostTodoBody = {
  title: string;
};

export async function postTodo({ title }: PostTodoBody) {
  const body = JSON.stringify({
    status: "todo",
    title
  });
  const res = await fetch("http://localhost:3000/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body
  });
  if (!res.ok) {
    throw new Error("");
  }
}

export async function fetchTodoList() {
  const res = await fetch("http://localhost:3000/todo", {
    method: "GET"
  });
  if (!res.ok) {
    throw new Error("");
  }
  return (await res.json()) as Task[];
}
