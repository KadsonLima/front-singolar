import styled from "styled-components";
import {FaPencilAlt} from 'react-icons/fa'

export default function EditPost({edit, setEdit}) {

  function changeEdit(){
    setEdit(!edit)
  }

  return <ButtonEdit onClick={()=>{changeEdit()}}/>

  
}

const ButtonEdit = styled(FaPencilAlt)`
  position: absolute;
  right: 45px;
  top: 23px;
  color: #595757;
  font-size: 21px;
  cursor: pointer;
  z-index: 1;
  &&:hover{
    filter: brightness(2);
  }
`