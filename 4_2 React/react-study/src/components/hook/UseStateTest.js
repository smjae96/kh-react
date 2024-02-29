/*
    - 훅 (hook)
      : (함수형) 컴포넌트에서 사용
      상태(state)와 생명주기(life cycle) 기능을 사용할 수 있도록 해주는 함수

    - useState : 상태를 관리할 수 있도록 해주는 함수 (생성, 변경)

        [1] import React, { useState } from 'react';
        [2] 생성
                    const [변수명, 함수명] = useState([초기값]);
                    - 변수명: 현재 상태의 데이터를 저장하는 공간(이름)
                    - 함수명: 해당 상태의 데이터를 변경하는 함수(이름)
        [3] 사용
                    - 현재 상태의 데이터를 사용하고자 하면? 변수명
                        * HTML 내에서 사용 시 {변수명}
                        * 스크립트 내에서 사용 시 : 변수명
                    - 해당 상태의 데이터를 변경하고자 하면? 함수명(변경할 값)

*/
import { useState } from "react";
function UseStateTest() {
    const [number, setNumber] = useState(1);
    const [val, setVal] = useState(0);

    function addNumber() {
        setNumber(number+val);
    }

    function minusNumber() {
        setNumber(number-val);
    }
    // let count = 0;
    // const count [count, setCount] = useState(0);

    // function plus() {
    //     console.log(count);
    //     setNumber(number+(val*++count));
    // }
    // function minus() {
    //     setNumber(number-(val*++count));
    // }
    // function changeNumber(type) {

    //     if(type == 0) {
    //         setNumber(number+(val*count));
    //     } else if (type == 1) {
    //         setNumber(number-(val*count));
    //     }
    //     setCount
    // }
    
    

    return (
        <>
            <div>
                <button className="W-85" onClick={()=>addNumber()}>+</button>
                <button className="W-85" onClick={minusNumber}>-</button>
            </div>
            <input type="text" value={number}/>
            <br></br>
            <input type="text" placeholder="증감시킬 값을 입력" onChange={(ev)=>{setVal(Number(ev.target.value));}}/>
        </>
    );
}

export default UseStateTest;