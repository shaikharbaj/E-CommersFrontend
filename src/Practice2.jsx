import React from 'react'
import { useState, useEffect } from 'react'
const Practice2 = () => {
    const [userDetails, setUserDetails] = useState([])
    const getApi = async () => {
        try {
            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json();
              setUserDetails(data.users);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getApi()
    }, [])

    return (
        <>
            <div>
                {
                    userDetails.map((item) => {
                        return <div key={item.id}>
                            <ul>
                                <li>{item.id}</li>
                                <li>{item.firstName}</li>
                                <li>{item.lastName}</li>
                                <li>{item.middleName}</li>
                                <li>{item.age}</li>
                            </ul>
                        </div>
                    })
                }

            </div>
        </>
    )
}

export default Practice2