import React, { useEffect, useState } from "react";
import "./Feed.css";
import Stories from "./Story/Stories";
import MessageSender from "./MessageSender/MessageSender";
import Post from "./Post/Post";
import db from "../../firebase";

const Feed = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    db.collection("post")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPost(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);
  return (
    <div className="feed">
      <Stories />
      <MessageSender />
      {post.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          userName={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  );
};

export default Feed;
