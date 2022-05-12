import { createRoot } from "react-dom/client";
import { App } from "./App";

function createAndAppendRootNode() {
  const node = document.createElement("main");
  document.body.append(node);
  return node;
}

function initApplication(node) {
  const root = createRoot(node);
  root.render(<App />);
}

export { createAndAppendRootNode, initApplication };
