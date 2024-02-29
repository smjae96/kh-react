import React, { useState } from 'react';

// component
import Square from './Square';

function Board() {
    const [index, setIndex] = useState(1)

    function squareWithNum(num) {
        return (
            <Square value={num} />
        )
    }
    // Square 컴포넌트를 사용
    //  함수를 사용할 때도 중괄호({}) 안에 작성
    //  시작태그와 종료태그를 명시해줘야 함(ex <br/>)
    //  <></> : 하나의 요소를 의미할 때 사용, 속성없이 요소를 묶어줄때만 사용.
    return (
        <>
            {squareWithNum(1)}
            {squareWithNum(2)}
            {squareWithNum(3)}
            <br/>
            {squareWithNum(4)}
            {squareWithNum(5)}
            {squareWithNum(6)}
            <br/>
            {squareWithNum(7)}
            {squareWithNum(8)}
            {squareWithNum(9)}
        </>
    )
}

export default Board;