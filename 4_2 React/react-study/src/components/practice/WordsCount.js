import React, {useState} from 'react';

function WordsCount(props) {
    const [text, setText] = useState("");
    function changeText(event) {
        setText(event.target.value);
    }
    return (
        <div>
            <input type='text' onChange={changeText}></input>
            <div>글자 수: {text.length}</div><br></br>
            <div>공백제외 글자 수: {text.replace(/ /g, "").length}</div>
        </div>
    );
}

export default WordsCount;