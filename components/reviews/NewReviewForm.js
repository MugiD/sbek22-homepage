import { useRef } from "react";
import {
  Box,
  Button,
  useColorModeValue,
  Input,
  Textarea,
  Heading,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

function NewReviewForm(props) {
  const authorInputRef = useRef();
  const titleInputRef = useRef();
  const textInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredTitle = titleInputRef.current.value;
    const enteredText = textInputRef.current.value;

    const reviewData = {
      author: enteredAuthor,
      title: enteredTitle,
      text: enteredText,
    };

    props.onAddReview(reviewData);
  }

  return (
    <Box
      borderRadius="lg"
      mt={6}
      p={3}
      textAlign="center"
      bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
      css={{ backdropFilter: "blur(10px)" }}
    >
      <Heading>Review</Heading>
      <form onSubmit={submitHandler}>
        <FormControl isRequired>
          <FormLabel htmlFor="author" align="left" mt={6} mb={2}>
            Review Author
          </FormLabel>
          <Input
            type="text"
            required
            id="author"
            ref={authorInputRef}
            placeholder="Author's Fullname"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="title" align="left" mt={6} mb={2}>
            Review Title
          </FormLabel>
          <Input
            type="text"
            required
            id="title"
            ref={titleInputRef}
            placeholder="Add Title"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="text" align="left" mt={6} mb={2}>
            Review Text
          </FormLabel>
          <Textarea
            resize="none"
            type="text"
            required
            id="text"
            h={200}
            borderRadius="lg"
            ref={textInputRef}
            placeholder="Add Text"
          />
        </FormControl>
        <Button colorScheme="teal" mt={6} type="submit">
          Add Review
        </Button>
      </form>
    </Box>
  );
}

export default NewReviewForm;
