import styled from "styled-components";
import { getCommentsPost, getUserPosts, listPosts, listUsers, updatePost } from "../../services/posts";
import { useEffect, useState } from "react";
import DeletePost from "../DeletePost/DeletePost";
import { Link, useParams } from "react-router-dom";
import EditPost from "../EditPost/EditPost";


export default function Posts({setIsOpen, setPostId}) {

  const {userId} = useParams();
  const [posts, setPosts] = useState(null);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const responsePosts = listPosts();
    const responseUsers = listUsers();

    responseUsers.then((users)=>{
      setUsers(users);
    })

    if(userId != undefined){
      getUserPosts(userId).then((post)=>{
        setPosts(post);
      })
      return
    }
    
    responsePosts.then((posts)=>{
      setPosts(posts);
    })

  

  }, []);

 

  const LisPost =  (posts)&&(posts.map((post, index)=>{

    const userName = users?.map((user) =>{
      if(user.id === post.userId){
        return user.username
      }
    })

    
    return <PostComments post={post} index={index} userName={userName} setIsOpen={setIsOpen} setPostId={setPostId}/>
    

    
  }))

  return <Container>
    {LisPost}
  </Container>;
}


const PostComments = (({post, index, userName, setIsOpen, setPostId})=>{

  const [seeComment, setSeeComment] = useState(false);
  const [comments, setComments] = useState(null);
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState("");
  const [tbody, setBody] = useState("");

  function sendEdit(){
    const body = {
      id:post.id,
      userId:post.userId,
      title,
      body:tbody,
    };

    updatePost(body).then(()=>{
     setEdit(!edit)
    });

  }

  const changeComments = () =>{
    setSeeComment(!seeComment)

    getCommentsPost(post.id).then((comments)=>{
      setComments(comments.data)
    })
    
  }

  const comment = comments?.map((comment, index)=>{

    return (
      <Comment key={index}>
          <Title >{comment.name}</Title>
          <Body>{post.body}</Body>
          <Name>{comment.email}</Name>
      </Comment>
    )
  })

  const postDefault = <Post key={index} >
    <DeletePost id={post.id} setIsOpen={setIsOpen} setPostId={setPostId}/>
    <EditPost edit={edit} setEdit={setEdit} />
    <Name to={`/users/${post.userId}`}>{userName}</Name>
    <Title >{post.title}</Title>
    <Body>{post.body}</Body>
    {seeComment&&comment}
    <Comments onClick={()=>{changeComments()}}>Comments</Comments>
  </Post>

  const postEditable = <Post key={index} >
    <DeletePost id={post.id} setIsOpen={setIsOpen} setPostId={setPostId}/>
    <EditPost edit={edit} setEdit={setEdit} />
    <Name to={`/users/${post.userId}`}>{userName}</Name>
    <input name="title" defaultValue={post.title} onChange={(e) => {
            setTitle(e.target.value);
          }}></input>
    <textarea defaultValue={post.body} onChange={(e) => {
            setBody(e.target.value);
          }}></textarea>
    <Button onClick={()=>{sendEdit()}}>Editar</Button>
    {seeComment&&comment}
    <Comments onClick={()=>{changeComments()}}>Comments</Comments>
  </Post>

  const editable = (!edit) ? (postDefault) : (postEditable)

  return editable

});

const Button = styled.button`
  width: 20%;
  height: 30px;
  margin-bottom: 5px;
  color: white;
  border: none;
  background-color: green;
  cursor: pointer;
  font-weight: 700;
  border-radius: 5px;
`
const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.h3`
margin-bottom: 5px;
font-weight: 600;
`;


const Name = styled(Link)`
  margin-bottom: 5px;
  font-weight: 900;
  font-size: x-large;
  text-decoration: none;
  color:#000;
  &&:hover{
    color: #4d4848;
  }
`;

const Body = styled.p`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
`;

const Post = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  min-height: 150px;
  width: 100%;
  border: 2px solid #cdcfd0;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 20px 20px;
  padding-bottom: 30px;
  cursor: pointer;
  position: relative;
  z-index: 0;


  input{
    width: 100%;
    margin-bottom: 10px;
  }
  textarea{
    width: 100%;
  margin-bottom: 10px;
  height: 100px;
  }
`;

const Comments = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d3d3d3;
  height: 30px;
  width: 100.3%;
  position: absolute;
  font-weight: 900;
  bottom: -1px;
  border-radius: 0px 0px 6px 6px;
  left: -1px;
`;

const Comment = styled.div`
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #d3d3d3;
  min-height: 60px;
  padding: 10px;
  border-radius: 6px;
  p{
    font-size: xx-small;
    margin-bottom: 0;
  }
  a{
    margin-top: 5px;
    font-size: xx-small;
    text-align: end;
    
  }
`;