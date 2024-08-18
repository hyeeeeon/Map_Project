// 게시물 화면
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: space-between; 
    align-items: center;       
    text-align: center;
    height: 100vh; 
`;

const H2 = styled.h2`
    margin-bottom: 10px; 
`;

const Hr = styled.hr`
    border: none; 
    width: 800px;
    border-top: 0.5px solid #8D8D8D;  
    margin: 20px 0; 
`;

const P = styled.p`
    margin-bottom: 50px; 
    flex-grow: 1;
`;

const BackButton = styled(Link)`
    padding: 5px;
    font-size: 10px;
    width: 160px;
    text-align: center;
    background-color: white;
    color: black;
    border-radius: 8px;
    border: 0.5px solid  #8D8D8D; 
    text-decoration: none;
    transition: 0.2s ease-in;

    &:hover {
        transform: scale(1.02);
    }
`;


function Post() {
    const location = useLocation();
    //전달된 데이터 받음
    const { title, content } = location.state || {};

    return (
        <Container>
            <div>
                <H2>{title}</H2>
                <Hr />
                <P>{content}</P>
            </div>
            <BackButton to="/">홈 화면으로 이동</BackButton>
        </Container>
    );
}

export default Post;