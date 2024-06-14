import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { MyComponent } from "./components/my-component";

const container = document.getElementById("app");
const root = createRoot(container);

const App = () => <MyComponent />;

root.render(<App />);
