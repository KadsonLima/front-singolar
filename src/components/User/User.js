import styled from "styled-components";

export default function User({user}) {

  return (
    <UserContainer>
        <Title>{user?.name}({user?.username})</Title>
        <Data>E-mail: {user?.email}</Data>
        <Data>Address: {user?.address.street} - {user?.address.city}</Data>
        <Data>Phone: {user?.phone}</Data>
        <Data>Website: {user?.website}</Data>
        <Data>Company: {user?.company.name}</Data>
    </UserContainer>
  );
}

const UserContainer = styled.div`
  display: flex;
  max-width: 600px;
  height: 200px;
  width: 100%;
  border: 2px solid #cdcfd0;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 20px;
  flex-direction: column;
  gap: 10px;
`;


const Title = styled.h3`
  font-weight: 900;
  font-size: large;
  margin-bottom: 10px;
`
const Data = styled.p`


`