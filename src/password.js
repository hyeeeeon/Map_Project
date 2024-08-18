//비밀번호 입력 화면
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: center;   
    align-items: center;       
    height: 100vh;             
    text-align: center;        
`;

const H2 = styled.h2`
    margin-bottom: 5px; 
`;

const Ul = styled.ul`
    margin-bottom: 35px; 
    font-size: 11px;
    padding: 0;
`;

const Input = styled.input`
    padding: 5px;
    font-size: 16px;
    width: 200px;
    text-align: center;
    margin-bottom: 20px;
    border-radius: 8px;
    border: 1px solid gray;

    &:: placeholder {
        font-size: 13px;
    }
`;

const CheckButton = styled(Link)`
    padding: 5px;
    font-size: 16px;
    width: 100px;
    text-align: center;
    background-color: #8D8D8D;
    color: white;
    border-radius: 8px;
    border: none;
    text-decoration: none;
    transition: 0.2s ease-in;

    &:hover {
        transform: scale(1.02);
    }
`;

function Password() {
    const [password, setPassword] = useState("");
    const onSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <Container>
            <H2>비밀번호</H2>
            <Ul>게시물을 업로드하기 위해 권한 확인이 필요합니다.</Ul>
            <form onSubmit={onSubmit}>
                <input
                    type="password"
                    placeholder="비밀번호를 입력해 주세요"
                    onChange={(event) => setPassword(event.target.value)} />
                <CheckButton><Link to="/page">입력</Link></CheckButton>
            </form>
        </Container>
    );
}

export default Password;