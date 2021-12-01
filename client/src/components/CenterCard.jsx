import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function CenterCard(props) {
    const name = props.name;
    const vaccination_type = props.vaccination_type;
    const id = props.id;
    const postalCode = props.postalCode;
    const action = props.action


    return (
        <Card style={{ width: '18rem' }} className="mx-auto my-4">
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Postal Code: {postalCode}</Card.Subtitle>
                <Card.Text>
                    Type: {vaccination_type}
                </Card.Text>
                {
                    (action === "display") ?
                        <Card.Link as="div" ></Card.Link>
                        :
                        <Card.Link as={Link} to={`/book/${id}/new`}>Book</Card.Link>
                }
            </Card.Body>
        </Card>
    )
}

export default CenterCard
