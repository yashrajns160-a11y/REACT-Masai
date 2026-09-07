
import { SimpleGrid, Box } from "@chakra-ui/react";

function SimpleGridExample() {


    return (
        <SimpleGrid columns={2} columnGap="2" rowGap="4">
            <Box height="20" width="90%" bg="green.500" />
            <Box height="20" bg="green.500" />
            <Box height="20" bg="green.500" />
            <Box height="20" bg="green.500" />
        </SimpleGrid>
    )
}
export default SimpleGridExample;