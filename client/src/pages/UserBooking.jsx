import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import UserForm from '../components/UserForm'
import CenterCard from '../components/CenterCard';

function UserBooking(props) {
    const { id } = useParams();
    console.log(id)
    const [center, setCenter] = useState([]);

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
            {
                (center) ?
                    <CenterCard name={center.name} postalCode={center.postalCode} vaccination_type={center.vaccination_type} id={center._id} action="display" />
                    :
                    <h1>
                        Loading
                    </h1>

            }
            <UserForm />
        </div>
    )
}

export default UserBooking
