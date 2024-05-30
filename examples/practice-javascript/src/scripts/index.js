import { createRoot } from "react-dom/client";
import NavigationBar from "../components/NavigationBar/NavigationBar";

const domNode = document.getElementById("navigation");
const root = createRoot(domNode);
root.render(<NavigationBar />);
