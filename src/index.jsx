import { createRoot } from "react-dom/client";
import { App } from "./App";

const node = document.createElement("main");
document.append(node);
const root = createRoot(node);
root.render(<App />);
