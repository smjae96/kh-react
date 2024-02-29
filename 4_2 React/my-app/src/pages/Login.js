import '../css/Login.css';

function Login() {
    function aElement(url, text) {
        return (
            <a href={url} 
               style={{marginLeft: '5px', textDeoration: 'none'}}
            >{text}</a>
        )
    }
    return (
        <>
            <img src="" alt="불러오기 실패" />
            <section>
                <article>
                    <input type="text" />
                    <input type="password" />
                </article>
                <button>로그인</button>
            </section>
            {aElement("#", "회원가입")}
            {aElement("#", "아이디 찾기")}
            {aElement("#", "비밀번호 찾기")}
        </>
    )
}

export default Login;