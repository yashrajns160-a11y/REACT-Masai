import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AllUsers() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // setLoading(true);
        fetch("https://reqres.in/api/users")
            .then((res) => res.json())
            .then((res) => {
                setUsers(res.data);
                setLoading(false);
            });
            // API se jo response aata hai, usko JSON format mein convert kar rahe hain.
    }, []);
    console.log(users);
    if (loading) {
        return <h1>Loading...</h1>
    }


    return (
        <div>
            <h1>AllUsers</h1>
            {
                users.map((user) => {
                    return (
                        <div key={user.id}>
                            <h4>{user.first_name}</h4>
                            <Link to={`/users/${user.id}`}>Show more Details</Link>
                            {/* link yeh bata raha /users/1 */}
                        </div>
                    );
                })
            }
        </div>
    );
}
export default AllUsers;