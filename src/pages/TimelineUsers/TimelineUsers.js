
import SendPost from "../../components/sendPost/SendPost";
import styled from "styled-components";
import Posts from "../../components/Posts/Posts";
import { useParams } from "react-router-dom";
import User from "../../components/User/User";
import { useState, useEffect } from "react";
import { getUser } from "../../services/posts";

export function TimelineUser({setIsOpen, setPostId}) {
  const {userId}= useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser(userId).then(user =>{
      setUser(user);
    })
  
  }, [])
  

  return (
    <Container>
      <FeedPosts>
        <User user={user}/>
        <Posts setIsOpen={setIsOpen} setPostId={setPostId}/>
      </FeedPosts>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 58px 0;
  padding: 10px;

  
`;
const FeedPosts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px;


`