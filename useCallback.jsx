// useCallback 

const addTodo = useCallback(() => {
setTodos((t) => [...t, "New Todo"]);
}, [todos]);

// useMemo

const isEven = useMemo(() => {
let i = 0;
let j = 0;
while (i < 9000 && j < 9000022) i = j++;
return counteOne % 2 === 0;
}, [counteOne]);
