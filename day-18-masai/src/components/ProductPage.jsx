import {
    Box,
    Container,
    Heading,
    Image,
    Text
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const ProductPage = () => {

    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        console.log("Product ID:", id);
        axios
            .get(`https://dummyjson.com/products/${id}`)
            .then((res) => {
                console.log("Product data:", res.data);
                setData(res.data);
            })
            .catch((err) => {
                console.log("Error:", err);
            });
    }, [id]);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <Container maxW="1000px">

            <Box
                display="flex"
                gap="40px"
                alignItems="center"

            >
                <Box>
                    <Image
                        border="2px solid black"
                        rounded="md"
                        fit="contain"
                        src={data.thumbnail}
                        h="300px"
                        w="350px"
                        objectFit="contain"
                    />
                </Box>
                <Box border="2px solid black"
                    borderRadius="md"
                    padding="20px"
                >

                    <Heading size="lg">
                        {data.title}
                    </Heading>

                    <Text mt="10px">
                        {data.description}
                    </Text>

                    <Text mt="10px">
                        Price: ₹{data.price}
                    </Text>

                    <Text mt="10px">
                        Brand: {data.brand}
                    </Text>

                    <Text mt="10px">
                        Category: {data.category}
                    </Text>

                    <Text mt="10px">
                        Rating: ⭐ {data.rating}
                    </Text>

                    <Text mt="10px">
                        Stock: {data.stock}
                    </Text>
                </Box>
            </Box>

        </Container>
    );
};