import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
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
    font-size: 17px;
    margin-bottom: 5px;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    margin-bottom: 1rem; 
`;

const Input = styled.input`
    padding: 5px;
    font-size: 16px;
    width: 300px;
    text-align: center;
    margin-bottom: 20px;
    border-radius: 8px;
    border: 1px solid gray;

    &::placeholder {
        font-size: 13px;
    }
`;

const Textarea = styled.textarea`
    padding: 9px;
    font-size: 16px;
    width: 300px;
    text-align: center;
    margin-bottom: 20px;
    border-radius: 8px;
    border: 1px solid gray;
    resize: none; 
    overflow: hidden; 
    min-height: 40px; 

    &::placeholder {
        font-size: 14px; 
        color: gray;     
    }
`;

const InputButton = styled.button`
    padding: 5px;
    font-size: 16px;
    width: 100px;
    text-align: center;
    background-color: #8D8D8D;
    color: white;
    border-radius: 8px;
    border: none;
    transition: 0.2s ease-in;
    cursor: pointer;

    &:hover {
        transform: scale(1.02);
    }
`;

function EditPost() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();
    const { getPost } = usePosts(); // usePosts 훅에서 getPost 함수 가져오기

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const postFromStorage = localStorage.getItem('newPost');
                if (postFromStorage) {
                    const post = JSON.parse(postFromStorage);
                    setTitle(post.title);
                    setContent(post.content);
                } else {
                    const post = await getPost(Number(id));
                    if (post) {
                        setTitle(post.title);
                        setContent(post.content);
                    } else {
                        console.error("게시물을 찾을 수 없습니다.");
                    }
                }
            } catch (error) {
                console.error("게시물 로드 중 오류 발생:", error);
            }
        };
        fetchPost();
    }, [id, getPost]);

    const onTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const onContentChange = (e) => {
        setContent(e.target.value);
    };

    const onButtonClick = () => {
        // 게시물 저장 로직 추가
        console.log("제목:", title);
        console.log("본문:", content);
        // 완료 후 다른 페이지로 이동할 경우
        navigate('/some-other-page');
    };

    return (
        <Container>
            <InputContainer>
                <H2>제목</H2>
                <Input
                    onChange={onTitleChange}
                    value={title}
                    type="text"
                    placeholder="게시물 제목을 입력하세요." />
            </InputContainer>

            <InputContainer>
                <H2>본문</H2>
                <Textarea
                    onChange={onContentChange}
                    value={content}
                    placeholder="본문을 입력하세요." />
            </InputContainer>

            <InputButton onClick={onButtonClick} to="/">완료</InputButton>
        </Container>
    );
}

export default EditPost;
