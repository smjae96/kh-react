import React, {useState} from "react";
function Counter() {
    // const num = 1;
    const [num, setNum] = useState(1);

    function addNumber() {
        setNum(num+1)
    }
    // -----------------------------------
    const initValue="안녕";
    const [message, setMessage] = useState("안녕");

    function changeInputValue(event) {
        // 이벤트 객체: event
        // 이벤트 객체가 가지고 있는 입력받은 값을 message 변수에 저장
        setMessage(event.target.value);
    }
    function reset() {
        setMessage("안녕")
    }
    // --------------------------------------
    const [like, setLike] = useState(false);

    function changeLike(event) {
        // setLike(event.target.checked);
        setLike(!like);
    }
    // ---------------------------------------
    const [age, setAge] = useState(20);
    function addAge() {
        setAge(age+1)
    }
    const [name, setName] = useState("xxx");

    function changeNameValue(e) {
        setName(e.target.value);
    }
    function restName() {
        setName("xxx");
    }
    
    return (

        <>
            <button onClick={addNumber}>클릭 시 증가(+1)</button>
            {/* <button onClick={()=>{setNum(num+1)}}>클릭 시 증가(+1)</button> */}
            <div>{num}</div>
            <hr></hr>
            <input type="text" value={message} id="tex" onChange={changeInputValue}></input>
            <button onClick={reset}>Reset</button>
            <hr></hr>
            <input type="checkbox" checked={like} onChange={changeLike}></input>
            <label>좋아요</label>
            <p>
                {/* 체크가 된 상태면, 해당 게시글을 좋아합니다. */}
                {/* 체크가 해제된 상태면, 해당 게시글을 좋아하지 않습니다.*/}
                {/* 조건 ? 참일때 : 거짓일때 */}
                {like ? "해당 게시글을 좋아합니다." : "해당 게시글을 좋아하지 않습니다"}
            </p>
            <hr></hr>
            <input type="text" name="userName" value={name} onChange={changeNameValue}></input>
            <button onClick={addAge}>나이 증가</button>
            <p>
            안녕하세요.{" "+name+"님 당신은 "+age+"살입니다."}
            </p>
        </>
    )
}

export default Counter;