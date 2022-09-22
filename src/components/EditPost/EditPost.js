import styled from "styled-components";
import {FaPencilAlt} from 'react-icons/fa'

export default function EditPost() {


  return <ButtonEdit onClick={()=>{}}/>

  
}

const ButtonEdit = styled(FaPencilAlt)`
  position: absolute;
  right: 45px;
  top: 23px;
  color: #595757;
  font-size: 21px;
  cursor: pointer;

  &&:hover{
    filter: brightness(2);
  }
`