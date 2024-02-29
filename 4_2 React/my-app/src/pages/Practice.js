import React, {useState} from "react";

function Practice(props) {
    const [count, setCount] = useState(0);
    function countUp() {
        setCount(count+1)
    }
    return (
        <div>
            <button onClick={countUp}>숫자 증가!</button>
            <div>{count}</div>
        </div>
    );
}

export default Practice;