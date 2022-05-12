import { createAndAppendRootNode, initApplication } from "./main";

function start() {
  const node = createAndAppendRootNode();
  initApplication(node);
}

export { start };
