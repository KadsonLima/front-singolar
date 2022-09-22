import Modal from 'react-modal';
import React from 'react';
import styled from 'styled-components';
import { deletePost } from '../../services/posts';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width:'400px',
    height:'100px',
    transform: 'translate(-50%, -50%)',
    fontSize:'20px',
  },
};

export function ModalPage({modalIsOpen, setIsOpen, postId}) {

  function closeModal() {
    setIsOpen(false);
  }

  function id() {
    console.log(postId);
    deletePost(postId).then(()=>{setIsOpen(false);})
  }

  return (

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Title>Do you want to delete the Post {postId}?</Title>
        <BoxButtons>
            <Buttons onClick={closeModal}>No</Buttons>
            <Buttons onClick={id}>Yes</Buttons>
        </BoxButtons>
      </Modal>

  );
}

const Title = styled.h3`

text-align: center;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  color: #000;

`

const BoxButtons = styled.div`

    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-top: 15px;
`


const Buttons = styled.button`

    width: 70px;
    height: 20px;
    border: none;
    border-radius: 5px;

`