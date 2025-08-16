import React, { useState, useMemo } from "react";
function CounterMemo() {
const [counteOne, setCounterOne] = useState(0);
const [counteTwo, setCounterTwo] = useState(0);
const incrementOne = () => {
setCounterOne(counteOne + 1);
};
const incrementTwo = () => {
setCounterTwo(counteTwo + 1);
};
const isEven = useMemo(() => {
let i = 0;
let j = 0;
while (i < 9000 && j < 9000022) i = j++;
return counteOne % 2 === 0;
}, [counteOne]);
return (
<div>
<button onClick={incrementOne}>Increment one{counteOne}</button>
<br />
<span>{isEven ? "even" : "odd"}</span>
<br />
<button onClick={incrementTwo}>Increment two{counteTwo}</button>
</div>
);
}
export default CounterMemo;
