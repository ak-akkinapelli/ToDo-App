import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { ITodo } from "../interfaces";
import { StackDivider, VStack, useToast } from "@chakra-ui/react";

function TodoList() {
  const toast = useToast();
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (todo: ITodo): void => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      toast({
        title: "Cannot add empty TODO",
        description: "",
        status: "error",
        duration: 900,
        isClosable: true,
      });
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId: number, newValue: ITodo): void => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev: ITodo[]) =>
      prev.map((item: ITodo) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id: number): void => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = (id: number): void => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <VStack
      divider={<StackDivider />}
      borderColor="gray.100"
      borderWidth={"2px"}
      padding={4}
      borderRadius="lg"
      width={"100%"}
      maxWidth={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems={"stretch"}
    >
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </VStack>
  );
}

export default TodoList;
