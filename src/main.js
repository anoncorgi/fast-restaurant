import { createRoot } from "react-dom/client";
import { Root } from "./Root";

function createAndAppendRootNode() {
  const node = document.createElement("div");
  document.body.prepend(node);
  return node;
}

function initApplication(node) {
  const root = createRoot(node);
  root.render(<Root />);
}

export { createAndAppendRootNode, initApplication };
