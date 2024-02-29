/*
    함수형 컴포넌트 (Functional Component)
    - 클래스형 컴포넌트에 비해 비교적 간단
    - React v16.8 이후로 훅(hook) 기능이 추가되어
       상태(state), 생명주기(life cycle) 관리가 가능하게 됨.
*/
import React,{ useState, useEffect } from 'react';


function FunctionalComponent() {
    const [value, setvalue] = useState("나는 함수형 컴포넌트입니다.");
    
    // useEffect : 렌더링 시점마다 실행되는 훅(hook)
    // - 처음 한번만 실행하고자 할 경우 두번째 인자값으로 [] 작성
    useEffect(()=>{
        setvalue("나는 함수형 컴포넌트지롱~!");
    }, [])
    function change() {
        setvalue("Functional Component")
    }
    return (
        <>
            <button onClick={change}>버튼</button>
            <div>
                {value}
            </div>
        </>
    );
}

export default FunctionalComponent;