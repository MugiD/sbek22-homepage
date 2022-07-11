import {GridItem, Heading, Text, useColorModeValue, Box, Image } from "@chakra-ui/react"



function ReviewItem(props) {
    const profile = `/images/profile.png`

    return (
        <GridItem 
        borderRadius="lg"
        m={[2, 4, 6]}
        p={[2, 4, 6]}
        textAlign="center"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        css={{ backdropFilter: "blur(10px)" }}
        >
            <Box display="flex" gap={2} mb={4}>
                <Image src={profile} width={31} height={31} display={{base: 'none', md: 'inline-block'}}/>
            <Heading size={["sm", "md", "lg"]} color="teal.500">{props.author}</Heading>
            </Box>
            <Heading size={["sm", "sm", "md"]} mb={2}>{props.title}</Heading>
            <Text>{props.text}</Text>
        </GridItem>
    );
  }
  
  export default ReviewItem;