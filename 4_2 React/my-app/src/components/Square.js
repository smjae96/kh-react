import React, {useState} from 'react';

function Square(props) {
    // 버튼 내용의 초기값을 props.value(부모 컴포넌트가 전달해준 value 값)
    // 으로 상태를 초기화.
    const [btnValue, setBtnValue] = useState(props.value);

    // - class 속성은 className 이라는 이름 사용
    // - 하나의 요소 형태로 리턴
    // - HTML 내에 변수 사용 시 중괄호({}) 사용
    const test = () => {
        // btnValue 초기화
        if(btnValue != "X") {
            setBtnValue('X')  
        } else {
            setBtnValue(props.value)
        }
    }

    return (
        
        <button className="square" onClick={test} >
            {btnValue}
        </button>
    );
}

export default Square;