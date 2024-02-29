import React ,{useState, useMemo} from 'react';
/*
    useMemo : Memoization(메모이제이션) 기법을 사용한 리액트 hook
              연산 결과를 기억해두고, 동이랗ㄴ 입력이 들어오면 기억해둔 데이터를
              변환하는 기법
    [1] import React, {useMemo} from 'react';
    [2] useMemo(()=>{//...}, [])
        (1번째 인자) 메모이제이션 기법을 사용할 콜백함수
        (2번째 인자) 추적할 요소의 배열
*/
function UseMemoTest() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    /*
    function sumResult() {
        console.log("sumResult 실행!");
        return num1+num2
    }
    */
   
    const sum = useMemo(() => {
        console.log("useMemo 실행!")
        return num1+num2;
    }, [num1, num2])

    // const sum = sumResult();

    const changeNum1 = () => {
        setNum1(num1+1)
    }
    const changeNum2 = () => {
        setNum2(num2+1)
    }
    
    return (
        <div className='center'>
            <div>
                <button onClick={changeNum1}>NUM1</button>
                <button onClick={changeNum2}>NUM2</button>
            </div>
            <div>
                <button onClick={() => setNum1(0)}>NUM1(초기화)</button>
                <button onClick={() => setNum2(0)}>NUM2(초기화)</button>
            </div>
            <hr/>
            NUM1: {num1} <br></br> 
            NUM2: {num2}<br></br>
            NUM1 + NUM2 = {sum}
        </div>
    );
}

export default UseMemoTest;