import React, { useEffect, useState } from 'react';
import CenterCard from '../components/CenterCard';


function CenterChoice(props) {
    const [centers, setCenters] = useState([])

    useEffect(() => {
        async function getCenters() {
            const res = await fetch("/api/center");
            const data = await res.json();
            setCenters(data)
            console.log(centers)
        }
        getCenters();
    }, [])


    return (
        <div>
            {
                (centers) ?
                    centers.map((e, i) => {
                        return (
                            <CenterCard name={e.name} postalCode={e.postalCode} vaccination_type={e.vaccination_type} id={e._id} />
                        )
                    })
                    : ""
            }

        </div>
    )
}

export default CenterChoice
