import styled from "styled-components";
import { VscPlayCircle } from "react-icons/vsc";
import Singolar from '../../assets/img/logo.png'
import { Link } from "react-router-dom";

export default function Header({ setTheme, theme }) {
  
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <StyledHeader>
      <Content>
        <Title to="/">
          <Logo src={Singolar}></Logo>
          Singolar
        </Title>
      </Content>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  height: 53px;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 900;
  padding: 16px;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  color: #ffff;
  left: 0;
  top: 0;
  z-index: 1;
`;

const Content = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #d3d3d3;
  text-decoration: none;
`;

const Logo = styled.img`
  border-radius: 50%;
  height: 25px;
  object-fit: fill;

`
