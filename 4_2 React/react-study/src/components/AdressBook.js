import React, {useState, useRef} from 'react';
import {Button, Table, Form} from 'react-bootstrap';



import AdressList from './AdressList';

function AdressBook(props) {
    const addrList = [
        {no: 1, name: "홍길동", phone: "010-1111-1111"}, 
        {no: 2, name: "아무개", phone: "010-2222-2222"}
    ]
    const optRef = useRef();
    // const [selection, setSelection] = useState("이름");
    const [keyWord, setKeyWord] = useState("")
    function checkOption() {
        // if(selection == "이름") {
        //     alert("이름")
        // } else {
        //     alert("연락처")
        // }
        // console.log(optRef.current.value);
        const option = optRef.current.value;
        // option => name, 입력값: 홍길동 ... "홍길동의 연락처는 010-1111-1111"
        addrList.forEach((address)=> {
            // address 객체 안에 option=>"name" 이라는 속성 값
            /*
            address[option]     // option에 저장된 값에 따라 객체의 속성에 접근
                => address["name"]
                => address["phone"]
            */
            if(option in address &&
                address[option] === keyWord) { 
                console.log(`${address.name}의 연락처는 ${address.phone}입니다.`)
                return;
            }
        })
        // 결과가 있으면 해당 내용을 출력.(콘솔창, alert)

    }

    return (
        <>
            <div>
                <Form.Select ref={optRef} size="sm">
                    <option value={"name"}>이름</option>
                    <option value={"phone"}>연락처</option>
                </Form.Select>&nbsp;
                <Form.Control type='text' placeholder='검색어를 입력하세요.' value={keyWord}
                        onChange={(ev)=>setKeyWord(ev.target.value)} />
                &nbsp;
                {/* <button onClick={checkOption}>검색</button> */}
                <Button variant='dark' onClick={checkOption}>검색</Button>
            </div>
            <br /><br /><br />
            <Table border={1} striped bordered hover variant="dark">
                <colgroup>
                    <col></col>
                    <col width={"40%"}></col>
                    <col width={"50%"}></col>
                </colgroup>
                <thead>
                    <tr id='tr1'>
                        <th>No</th>
                        <th>이름</th>
                        <th>연락처</th>
                    </tr>
                </thead>
                <tbody>
                    {addrList.map(function(adress) {
                        return (
                            <AdressList key={adress.no} no={adress.no} 
                                        name={adress.name}
                                        phone={adress.phone}></AdressList>
                        )
                    })}
                </tbody>
            </Table>
            <br /><br />
            <input type='text' placeholder='이름'></input>&nbsp;
            <input type='text' placeholder='연락처'></input>&nbsp;
            &nbsp;
            <button>추가</button>
        </>
    );
}

export default AdressBook;