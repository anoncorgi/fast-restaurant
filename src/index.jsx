import { createRoot } from "react-dom/client";
import { App } from "./App";

const node = document.createElement("main");
document.body.append(node);
const root = createRoot(node);
root.render(<App />);
