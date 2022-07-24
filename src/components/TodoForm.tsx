import { HStack, Button, Input } from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";
import { ChangeEvent } from "react";

function TodoForm(props: any) {
  const [input, setInput] = useState<string>(
    props.edit ? props.edit.value : ""
  );

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <HStack spacing={3}>
          <Input
            variant={"filled"}
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="todo-input edit"
          />
          <Button type="submit" colorScheme={"pink"} px="8">
            Update
          </Button>
        </HStack>
      ) : (
        <HStack>
          <Input
            variant={"filled"}
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input"
            ref={inputRef}
            type="text"
          />
          <Button type="submit" colorScheme={"teal"} px="8">
            Add todo
          </Button>
        </HStack>
      )}
    </form>
  );
}

export default TodoForm;
