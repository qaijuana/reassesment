import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"

function EditBooking(props) {
    const { id } = useParams();

    const [data, setData] = useState([]);

    useEffect(() => {
        async function getBooking() {
            const res = await fetch(`/api/book/${id}`);
            const resData = await res.json();
            setData(resData);
            console.log(data)
        }
        getBooking();
    }, [])



    return (
        <div>
            {
                (data) ? data : 
                <h1>Loading</h1>
            }

        </div>
    )
}

export default EditBooking
