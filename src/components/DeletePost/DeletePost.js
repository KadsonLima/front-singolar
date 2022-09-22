import styled from "styled-components";
import {FaRegTrashAlt} from 'react-icons/fa'

export default function DeletePost({id, setIsOpen, setPostId}) {

  function openModal(){
    setPostId(id);
    setIsOpen(true);
  }

  return <ButtonDelete onClick={()=>{openModal()}}/>

  
}

const ButtonDelete = styled(FaRegTrashAlt)`
  position: absolute;
  right: 20px;
  top: 23px;
  color: #595757;
  font-size: 21px;
  cursor: pointer;

  &&:hover{
    filter: brightness(2);
  }
`