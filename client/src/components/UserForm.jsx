import React from 'react';
import { Form, Button, FloatingLabel } from "react-bootstrap"

function UserForm(props) {

    function handleSubmit(e) {
        e.preventDefault();
        const name = e.target.name.value
        const nric = e.target.nric.value
        const last4 = nric.slice(5);
        const jab = e.target.dose.value;
        console.log(name, nric, last4, jab)
        function createUser() { 
            console.log("ni hao")
        }
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

                <Button variant="primary" type="submit" className="mt-4">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default UserForm
