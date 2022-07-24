import { HStack, Button, Input } from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";
import { FC } from "react";
import { ChangeEvent } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState<string>(
    props.edit ? props.edit.value : ""
  );

  // used Useref hook to focus on input feild by default, to capture it's value
  const inputRef = useRef(null);

  //useeffect to focus on input on load
  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //to prevent reload on submit
    event.preventDefault();

    //assigning a unique id and input text value on submit
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    //resetting input to empty string
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* based on edit is true or not two different components are returned */}
      {props.edit ? (
        <HStack spacing={3}>
          <Input
            variant={"filled"}
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
          />
          {/* Chakra UI submit button to update item  */}
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
            ref={inputRef}
            type="text"
          />
          {/* Chakra UI submit button to add item  */}
          <Button type="submit" colorScheme={"teal"} px="8">
            Add todo
          </Button>
        </HStack>
      )}
    </form>
  );
};

export default TodoForm;
