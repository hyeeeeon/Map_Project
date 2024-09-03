import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import usePosts from "./UsePosts";

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
    padding: 2px;
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
    padding: 4px;
    font-size: 11px;
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

function RePostPW() {
    const { id } = useParams(); // URL에서 id 추출
    const navigate = useNavigate(); // navigate 함수
    const { posts } = usePosts(); 
    const [password, setPassword] = useState(''); // 비밀번호 상태

    const onSubmit = (event) => {
        event.preventDefault();
        handleReturn(); // 비밀번호 확인 후 이동
    }

    const handleReturn = () => {
        navigate('/createpost/'); 
    };

    return (
        <Container>
            <H2>비밀번호 확인</H2>
            <Ul>게시물을 업로드하기 위해 권한 확인이 필요합니다.</Ul>
            <form onSubmit={onSubmit}>
                <Input
                    type="password"
                    placeholder="비밀번호를 입력해 주세요"
                    onChange={(event) => setPassword(event.target.value)} />
                <CheckButton onClick={handleReturn} to={`/editpost/${id}`}>입력</CheckButton>
            </form>
        </Container>
    );
}

export default RePostPW;
