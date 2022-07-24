import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { FaEdit, FaTrash } from "react-icons/fa";
import { ITodo } from "../interfaces";
import { Badge, HStack, Spacer, Text } from "@chakra-ui/react";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: 0,
    value: "",
  });

  const submitUpdate = (value: ITodo) => {
    updateTodo(edit.id, value);
    setEdit({
      id: 0,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  if (!todos.length) {
    return (
      <Badge colorScheme={"green"} p="3" m={3} borderRadius="lg">
        No Todos Added
      </Badge>
    );
  }
  return todos.map((todo: ITodo, index: number) => (
    <HStack
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <Text key={todo.id} onClick={() => completeTodo(todo.id)} pl="1" mt={"2"}>
        {todo.text}
      </Text>
      <Spacer />
      <FaEdit
        onClick={() => setEdit({ id: todo.id, value: todo.text })}
        className="edit-icon"
        cursor={"pointer"}
      />
      <FaTrash
        onClick={() => removeTodo(todo.id)}
        className="delete-icon"
        cursor={"pointer"}
      />
    </HStack>
  ));
};

export default Todo;
