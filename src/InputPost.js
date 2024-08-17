//게시글 입력 화면
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

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

function InputPost() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    //버전 6이면 navigate 사용
    const history = useHistory();

    const onTitleChange = (event) => setTitle(event.target.value);
    const onContentChange = (event) => setContent(event.target.value);

    const onButtonClick = (event) => {
        event.preventDefault();
        if (title === "" || content === "") {
            return;
        }

        const newPost = { title, content };
        const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
        savedPosts.push(newPost);
        localStorage.setItem("posts", JSON.stringify(savedPosts));

        history.push("/post", newPost);
        setTitle("");
        setContent("");
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
                    placeholder="본문을 입력하세요."
                />
            </InputContainer>

            <InputButton onClick={onButtonClick}>확인</InputButton>
        </Container>
    )
}

export default InputPost;
