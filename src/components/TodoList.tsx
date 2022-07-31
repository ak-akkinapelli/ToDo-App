import { useState, FC, useEffect } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { ITodo } from "../interfaces";
import { StackDivider, VStack, useToast } from "@chakra-ui/react";

const TodoList: FC = () => {
  //Toast is a chakra UI component
  const toast = useToast();

  const [todos, setTodos] = useState<ITodo[]>(() => {
    // get the todos from localstorage
    const savedTodos = localStorage.getItem("todos");
    // if there are todos stored
    if (savedTodos) {
      // return the parsed JSON object back to a javascript object
      return JSON.parse(savedTodos);
    }
    // return an empty array
    else return [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo: ITodo): void => {
    //To avoid adding empty task
    if (!todo.text || /^\s*$/.test(todo.text)) {
      //shows a toast woth description
      toast({
        title: "Cannot add empty TODO",
        description: "",
        status: "error",
        duration: 900,
        isClosable: true,
      });
      return;
    }
    // creating a new temp array by adding new todo and spreading existing todos
    const newTodos = [todo, ...todos];
    // updating todos
    setTodos(newTodos);
  };

  //editing existing todo
  const updateTodo = (todoId: number, newValue: ITodo): void => {
    //to check if the todo is empty
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev: ITodo[]) =>
      prev.map((item: ITodo) => (item.id === todoId ? newValue : item))
    );
  };
  // this method deletes a todo item
  const removeTodo = (id: number): void => {
    const removedArr = [...todos].filter((todo) => todo?.id !== id);

    setTodos(removedArr);
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
      <Todo todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} />
    </VStack>
  );
};

export default TodoList;
