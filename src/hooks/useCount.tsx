import { useState } from "react";

type Count = {
    count : number;
    increment : () => void;
    decrement : () => void;
}

export default function useCount(): Count {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        if(count === 0) return;
        setCount(prevCount => prevCount - 1);
    };

    return { count, increment, decrement };
}
