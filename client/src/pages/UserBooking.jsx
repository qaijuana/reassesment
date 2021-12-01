import React, { useEffect, useState } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { useParams } from 'react-router'
import UserForm from '../components/UserForm'
import CenterCard from '../components/CenterCard';

function UserBooking(props) {
    const timeslots = [9, 10, 11, 12, 13, 14, 15, 16, 17]
    const { id } = useParams();
    console.log(id)
    const [center, setCenter] = useState([]);
    const [slots, setSlots] = useState([]);

    useEffect(() => {
        async function getCenter() {
            const res = await fetch(`/api/center/${id}`)
            const data = await res.json();
            setCenter(data);
            console.log(center)
        }
        getCenter();
    }, [])

    console.log(center)


    return (
        <div>
            <div className="d-flex">
                {
                    (center) ?
                        <CenterCard name={center.name} postalCode={center.postalCode} vaccination_type={center.vaccination_type} id={center._id} action="display" />
                        :
                        <h1>
                            Loading
                        </h1>
                }
                <Card style={{ width: '18rem' }} className="mx-auto my-3">
                    <Card.Header>Time Slots</Card.Header>
                    <ListGroup variant="flush">
                        {timeslots.map((e, i) => {
                            return (
                                <ListGroup.Item className="text-start"> {e} hours <span className="text-end">  </span> </ListGroup.Item>
                            )
                        })}
                    </ListGroup>
                </Card>
            </div>

            <UserForm />
        </div>
    )
}

export default UserBooking
