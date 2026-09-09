import { useEffect, useState } from "react";
import axios from "axios";
import { SimpleGrid, Box, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

/*
Fetch products from API
Store products in state
Display products
Detect which product user clicked
Navigate to that product's details page
*/

export const Lisiting = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get("https://dummyjson.com/products?limit=10")
            .then((res) => setData(res.data.products))
            .catch((err) => console.log(err));
    }, []);

    console.log(data);

    return (
        <SimpleGrid columns={[1, 2, 2, 3]} gap="40px">
            {data && data.map((item) => (
                <Box
                    key={item.id}
                    onClick={() => navigate(`/products/${item.id}`)}
                    cursor="pointer"
                >
                    <Image
                        src={item.thumbnail}
                        // boxSize="150px"
                        border="1px solid red"
                        rounded="md"
                        h="200px"
                        w="250px"
                        fit="contain"
                    />
                    <Box>{item.title}</Box>
                    <Box>₹{item.price}</Box>
                </Box>
            ))}
        </SimpleGrid>
    );
};