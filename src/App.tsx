import React, { FC } from "react";
import TodoList from "./components/TodoList";
import { VStack, Heading, useColorMode, IconButton } from "@chakra-ui/react";
import "./App.css";
import { FaSun, FaMoon } from "react-icons/fa";
const App: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div className="App">
      <VStack padding={5}>
        <IconButton
          icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
          isRound={true}
          size={"lg"}
          alignSelf={"flex-end"}
          onClick={toggleColorMode}
          aria-label="mode"
        />
        <Heading
          padding={10}
          fontWeight={"extrabold"}
          size="2xl"
          bgGradient="linear(to-r, blue.300, teal.600)"
          bgClip={"text"}
        >
          What's the Plan for Today?
        </Heading>
        <TodoList />
      </VStack>
    </div>
  );
};

export default App;
