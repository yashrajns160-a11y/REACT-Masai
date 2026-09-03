
import { useState, useEffect } from "react";
import { getCities } from "./api";

function Cities() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        getCities({ page: 1, limit: 3 }).then((res) => console.log(res.data))
        // argument and passing them and using params
    }, [])
    return (
        <div>Cities</div>
    )
}
export default Cities;