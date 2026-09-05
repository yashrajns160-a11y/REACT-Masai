
import { useState, useEffect } from "react";
import { getCities, addCity } from "./api";
import AddCity from "./AddCities";

function Cities() {
    // const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    const handleGetCity = (page) => {
        getCities({
            page: page,
            limit: 3,
            sort: "name",
            order: "asc"
        }).then((res) => setData(res.data))
        // argument--> passing them and using params
    }

    useEffect(() => {
        handleGetCity(page)
    }, [page])

    const handleAddCity = (data) => {
        // make post request here
        addCity(data)
            .then((res) => {
                console.log("POST response:", res.data);

                alert("New city added");

                // Update UI
                handleGetCity(page);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div style={{ textAlign: "center" }} >
            <h1 >Cities</h1>

            <AddCity handleAddCity={handleAddCity} />

            {data.map((C) => (
                <div key={C.id} style={{ display: "flex", justifyContent: "space-around" }}>
                    {C.name} --- {C.address?.city || C.city}
                    {/* id - nameof person - email - city name */}
                </div>
            ))}
            <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
                PREV
            </button>
            <button disabled={true}>{page}</button>
            <button disabled={page >= 4} onClick={() => setPage(page + 1)}>
                NEXT
            </button>
        </div>
    )
}
export default Cities;