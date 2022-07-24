import { useState } from "react";
import TodoForm from "./TodoForm";
import { FaEdit, FaTrash } from "react-icons/fa";

//created a custom interface
import { ITodo } from "../interfaces";
//importing components form chakraUI
import { Badge, HStack, Spacer, Text } from "@chakra-ui/react";

const Todo = ({ todos, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: 0,
    value: "",
  });

  //This method updates the Todo item
  const submitUpdate = (value: ITodo) => {
    updateTodo(edit.id, value);
    setEdit({
      id: 0,
      value: "",
    });
  };
  //if id is valid, it's submitted
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  //if there are no todos, a badge is shown
  if (!todos.length) {
    return (
      <Badge colorScheme={"green"} p="3" m={3} borderRadius="lg">
        No Todos Added
      </Badge>
    );
  }
  //mapping through todos Array and displaying them in vertical stack
  return todos.map((todo: ITodo, index: number) => (
    //Hstack is for aligning items horizontally
    <HStack key={index}>
      <Text key={todo.id} pl="1" mt={"2"}>
        {todo.text}
      </Text>
      {/* add spacing using spacer  chakra UI component */}
      <Spacer />
      {/* font awesome icons in react icons module*/}
      <FaEdit
        onClick={() => setEdit({ id: todo.id, value: todo.text })}
        cursor={"pointer"}
      />
      <FaTrash onClick={() => removeTodo(todo.id)} cursor={"pointer"} />
    </HStack>
  ));
};

export default Todo;
