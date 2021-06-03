import React, { useEffect } from 'react'
import Axios from '../Axios'

function Trackuser() {

    const getdata = async (userid) => {
        const response = await Axios.get(`users/${userid}/repos`)
        console.log(response.data);
    }

    useEffect(() => {
        getdata("sanket9006");
    }, [])

    return (
        <div>


        </div>
    )
}

export default Trackuser
