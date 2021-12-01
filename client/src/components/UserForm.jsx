import React from 'react';
import { Form, Button, FloatingLabel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function UserForm(props) {
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const name = e.target.name.value;
        const nric = e.target.nric.value;
        const blocks = e.target.blocks.value;


        console.log(name, nric)
        async function createUser() {
            try {
                const res = await fetch("/api/slot/new", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: name,
                        nric: nric,
                        blocks: blocks
                    })
                });
                const data = await res.json();
                console.log(data)
                navigate(`/book/edit/${data._id}`)
            } catch (error) {
                console.error(error)
            }
        }
        createUser();
    }

    return (
        <div className="w-50 mx-auto">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name As Per NRIC</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="nric">
                    <Form.Label>NRIC</Form.Label>
                    <Form.Control type="password" placeholder="NRIC" />
                    <Form.Text className="text-muted">
                        We'll never share your personal details with anyone else.
                    </Form.Text>
                </Form.Group>

                <FloatingLabel controlId="dose" label="Dose">
                    <Form.Select aria-label="Floating label select example">
                        <option>Select Dose</option>
                        <option value="jab1">1st Jab</option>
                        <option value="jab2">2nd Jab</option>
                    </Form.Select>
                </FloatingLabel>

                <FloatingLabel controlId="blocks" label="time">
                    <Form.Select aria-label="Floating label select example">
                        <option>Select Time Slot</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                    </Form.Select>
                </FloatingLabel>

                {/* <Form.Control type="date" placeholder="date" />
                <Form.Control type="time" placeholder="time" /> */}

                <Button variant="primary" type="submit" className="mt-4">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default UserForm
