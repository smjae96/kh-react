/*
    useCallback : Memoization (메모이제이션) 기법 중 하나로 최적화를 해주는 기능
    - 인자로 전달된 콜백함수 그 자체를 기억해주는 기법

    const 변수 = useCallback(() => {
        return 결과
    }, [콜백함수 내에서 사용할 상태(변수)])
    * 첫번째 인자: 콜백함수 
    * 두번째 인자: 콜백함수 내에서 사용될 상태/변수/값
*/

import React, {useCallback, useEffect, useState} from 'react';

function UseCallbackTest(props) {
    const [num, setNum] = useState(0);

    /*
    const checkNumber = () => {
        console.log(`숫자 :  ${num}`)
        return;
    }
    */
   const checkNumber = useCallback(()=> {
    console.log(`숫자: ${num}`);
    return;
   }, [num])

    useEffect(()=>{
        console.log("checkNumber 함수 변경");
    }, [checkNumber])

    return (
        <div>
            <input type='number' value={num} 
                onChange={(ev)=>setNum(ev.target.value)} />
            &nbsp;
            <button onClick={checkNumber}>숫자확인</button>
        </div>
    );
}

export default UseCallbackTest;