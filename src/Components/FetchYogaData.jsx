import React from "react";
import useFetch from "./UseFetch";

const FetchYogaData = () => {

    const [data] =  useFetch('https://api.npoint.io/4459a9a10e43812e1152');
    console.log(data)

    return(
        <>
        <ul>
            <h1>YOGA INFORMATION</h1>
            {data && data.map(e=>(
                <>
                <li>
                    <h3>{e.name}</h3>
                    <p>Benefits: {e.benefits}</p>
                    <p>Time Duration: {e.time_duration}</p>
                </li>
                </>
            ))}
        </ul>
        </>
    )
}
export default FetchYogaData