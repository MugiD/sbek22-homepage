import ReviewItem from './ReviewItem'
import { Grid } from '@chakra-ui/react'
import Section from '../section'

function ReviewList(props) {
    return (
      <Section delay={0.1}>
      <Grid templateColumns='repeat(2, 1fr)' delay={0.1}>
        {props.reviews.map(review => (
          <ReviewItem
            key={review.id}
            id={review.id}
            author={review.author}
            title={review.title}
            text={review.text}
          />
        ))}
      </Grid>
      </Section>
    );
  }
  
  export default ReviewList;