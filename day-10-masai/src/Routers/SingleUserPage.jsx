import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function getUserById(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then((res) => res.json())
}


function SingleUser() {
    //how to retrieving the information-- useParams use karo
    const params = useParams();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    console.log(params)

    useEffect(() => {
        getUserById(params.user_id)
            .then((res) => {
                // console.log(res);
                // console.log(res.data);
                setData(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
            });
    }, [params.user_id]);
    if (loading) {
        return <h4>Loading...</h4>
    }

    return (
        <div>
            <h1>SingleUser</h1>
            <h2>User id :{params.user_id}</h2>
            <div>First Name : {data.first_name}</div>
            <div>Last Name : {data.last_name}</div>
            <div>Email: {data.email}</div>
            {/* <img src={data.avatar} alt={data.first_name} width="100px" /> */}
            <img alt={data.first_name} width="100px" />

            <br />
            <Link to="/users">Go Back</Link>
        </div>
    )

}
export default SingleUser;