import { useRef } from "react";
import ReactDOM from "react-dom/client";
function App() {
const inputElement = useRef();
const focusInput = () => {
inputElement.current.focus();
};
return (
<>
<input type="text" ref={inputElement} />
<button onClick={focusInput}>Focus Input</button>
</>
);
}
