import { FC } from "react";
import TodoList from "./components/TodoList";
//importing chakra UI components
import { VStack, Heading, useColorMode, IconButton } from "@chakra-ui/react";
//importing icons from react icons library
import { FaSun, FaMoon } from "react-icons/fa";

const App: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      {/* VStack instead of Div tag for vertical stacking */}
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
