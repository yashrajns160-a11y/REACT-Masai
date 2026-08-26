// import { useContext } from "react";
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
// import { AppContext } from "../context/AppContextProvider";

function AllUsers() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [page , setPage] =useState(1);
    // const {isAuth} = useContext(AppContext);

    let [searchParams, setSearchParams] = useSearchParams();
    const initialPage = Number(searchParams.get("page") || 1);
    const [page ,setPage]= useState(initialPage);

    useEffect(() => {
        // setLoading(true);
        fetch("https://reqres.in/api/users?page=" + page)
            .then((res) => res.json())
            .then((res) => {
                setUsers(res.data);
                setLoading(false);
            });
            // API se jo response aata hai, usko JSON format mein convert kar rahe hain.
    }, [page]);

    useEffect(() => {
        setSearchParams({
            page,
            key : "value",
            limit : 10
        });
    },[page])
    // url apne aap update hogi

    // if(!isAuth) {
    //     return <Navigate to="/" /> 
    // }
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
            <div>
                <button onClick={() => setPage(1)} disabled={page === 1}>
                    PREV
                </button>
                <button>{page}</button>
                <button onClick={() => setPage(2)} disabled={page === 2}>
                    PREV
                </button>
            </div>
        </div>
    );
}
export default AllUsers;