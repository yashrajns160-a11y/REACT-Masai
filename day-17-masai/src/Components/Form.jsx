import {
    Box,
    Container,
    Heading,
    Stack,
    Input,
    Button,
    PinInput,
    Text,
    Select,
    createListCollection
} from "@chakra-ui/react";
import { useState } from "react"



function Form() {
    const countryCollection = createListCollection({
        items: [
            { label: "India", value: "india" },
            { label: "China", value: "china" },
            { label: "Nepal", value: "nepal" }
        ],
    });
    const [loading, setLoading] = useState(false);
    const [otp, setOtp] = useState("");
    const [country, setCountry] = useState("");

    return (
        <Container>
            <Stack spacing="1rem">
                <Heading as="h2" color="red.500">
                    LOGIN
                </Heading>
                <Box>
                    <Input size="lg" placeholder="Email" type="email" />
                </Box>
                <Box>
                    <Input size="lg" placeholder="Password" type="Password" />
                </Box>
                <Box>
                    <Button
                        colorPalette="red"
                        variant="outline"
                        loading={loading}
                        onClick={() => {
                            setLoading(true);

                            setTimeout(() => {
                                setLoading(false);
                            }, 1000);
                        }}
                    >
                        LOGIN
                    </Button>
                </Box>
                <Box>
                    <PinInput.Root
                        value={otp}
                        onValueChange={(e) => setOtp(e.value)}
                        otp
                        mask
                    >
                        <PinInput.HiddenInput />

                        <PinInput.Control>
                            <PinInput.Input index={0} />
                            <PinInput.Input index={1} />
                            <PinInput.Input index={2} />
                            <PinInput.Input index={3} />
                        </PinInput.Control>
                    </PinInput.Root>
                    <Text>OTP: {otp}</Text>
                </Box>
                <Box>
                    <Box>
                        <Select.Root
                            collection={countryCollection}
                            value={country}
                            onValueChange={(e) => setCountry(e.value)}
                        >
                            <Select.HiddenSelect />

                            <Select.Label>Select Country</Select.Label>

                            <Select.Control>
                                <Select.Trigger>
                                    <Select.ValueText placeholder="Select Country" />
                                </Select.Trigger>

                                <Select.IndicatorGroup>
                                    <Select.Indicator />
                                </Select.IndicatorGroup>
                            </Select.Control>

                            <Select.Positioner>
                                <Select.Content>
                                    {countryCollection.items.map((country) => (
                                        <Select.Item item={country} key={country.value}>
                                            {country.label}
                                            <Select.ItemIndicator />
                                        </Select.Item>
                                    ))}
                                </Select.Content>
                            </Select.Positioner>
                        </Select.Root>

                        <Text>Country: {country}</Text>
                    </Box>

                </Box>

            </Stack>
        </Container>
    )
}
export default Form;