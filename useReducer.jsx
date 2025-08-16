import React, { useReducer, useState } from "react";
const initState = 0;
const reducer = (state, act) => {
switch (act) {
case "increment":
return state + 1;
case "decrement":
return state - 1;
case "reset":
return initState;
default:
return state;
}
};
function RedCounter() {
const [count, dispatch] = useReducer(reducer, initState);
return (
<div>
<div>{count}</div>
<button onClick={() => dispatch("increment")}> Increment {count}</button>
<button onClick={() => dispatch("decrement")}> decrement {count}</button>
<button onClick={() => dispatch("reset")}> reset {count}</button>
</div>
);
}
export default RedCounter;
