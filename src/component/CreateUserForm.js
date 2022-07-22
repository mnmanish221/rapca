import React from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

function CreateUserForm(props) {
    const [name, setName] = useState("");
    const [job, setJob] = useState("");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => {
        setShow(true);
    }

    const Postdata = () => {
        const postdata = {name,job}
        if (name !== "" & job !== "") {
            axios.post('https://reqres.in/api/users',postdata)
            .then((response)=>{
            console.log(response.status)
            if (response.status === 201) {
                handleClose();
                toast.success("User created scussfully", {
                theme: "colored"
            });
            }      
            })
        }  else {
            toast.error("Please fill your infomation", {
                theme: "colored"
            });
        }      
      }

  return (
    <div>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        <Button onClick={handleShow} variant="primary" style={{marginBottom: 50}}>Create new user</Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="email" onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" onChange={(e)=>setJob(e.target.value)} placeholder="Job" />
              </Form.Group>
              <Button onClick={Postdata} variant="primary" type="button">
                Submit
              </Button>
            </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default CreateUserForm