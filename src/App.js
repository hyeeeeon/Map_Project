import React from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home.js";
import AddPW from "./AddPW.js";
import InputPost from "./InputPost.js";
import PostDetail from "./PostDetail.js";
import DeletePW from "./DeletePW.js";
import RePostPW from "./RePostPW.js";
import EditPost from "./EditPost.js";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/addpassword" element={<AddPW />} />
                <Route path="/deletepassword/:id" element={<DeletePW />} />
                <Route path="/createpost/:id" element={<InputPost />} />
                <Route path="/post/:id" element={<PostDetail />} />
                <Route path="/repostpassword/:id" element={<RePostPW />} />
                <Route path="/editpost/:id" element={<EditPost />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;