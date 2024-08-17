// 메인 화면(생성버튼)
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Post from "./post";

function MainPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
        setPosts(savedPosts);
    }, []);

    return (
        <div>
            <Link to="/password">
                <button>게시글 생성</button>
            </Link>
            {posts.length > 0 ? (
                posts.map((post, index) => (
                    <Link
                        key={index}
                        to={{
                            pathname: "/post",
                            state: { title: post.title, content: post.content }
                        }}
                        style={{ textDecoration: 'none', color: 'black' }}
                    >
                        <h3>{post.title}</h3>
                    </Link>
                ))
            ) : (
                <p>게시글이 없습니다.</p>
            )}

        </div>
    );
}

export default MainPage;
