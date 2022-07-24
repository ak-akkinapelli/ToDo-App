import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* wrapping App component in  chakra provider tag to apply chakra UI  */}
    <ChakraProvider>
      <ColorModeScript initialColorMode={"dark"} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
