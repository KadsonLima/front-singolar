import styled from "styled-components";

export default function SendPost() {
  return (
    <Container>
      <Form>
        <Title>What are you going to share today?</Title>
        <Input placeholder="Title"></Input>
        <StyledTextarea placeholder="Text"></StyledTextarea>
        <Submit type="submit" value="Postar"></Submit>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  max-width: 600px;
  height: 200px;
  width: 100%;
  border: 2px solid #cdcfd0;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;

  width:100%;

`

const Title = styled.h3`
  font-weight: 900;
  font-size: large;
  margin-bottom: 20px;
`

const Input = styled.input`
  border-radius: 5px;
  height: 30px;
  width: 100%;
  padding:0 5px;
  border: none;
  background-color: #EFEFEF;

`
const Submit = styled.input`
  border-radius: 5px;
  height: 30px;
  width: 100%;
  border: none;
  background-color: #1877f2;
  color: white;
  font-weight: 900;
  cursor: pointer;

  &&:hover{
    filter: brightness(0.7);
  }
`

const StyledTextarea = styled.textarea`
  border-radius: 5px;
  width: 100%;
  height: 50px;
  border: none;
  padding:5px 5px;
  background-color: #EFEFEF;
`