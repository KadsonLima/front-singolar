
import SendPost from "../../components/sendPost/SendPost";
import styled from "styled-components";
import Posts from "../../components/Posts/Posts";

export function Timeline({setIsOpen, setPostId}) {
  

  return (
    <Container>
      <FeedPosts>
        <SendPost />
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