import ReviewList from '../components/reviews/ReviewList'
import { MongoClient } from 'mongodb'

function HomePage(props) {

    return (
        <ReviewList reviews={props.reviews} />
    )
}


export async function getStaticProps() {
    const client = await MongoClient.connect('mongodb+srv://Bek:bbek22bbek22@cluster0.0pz4e.mongodb.net/reviews?retryWrites=true&w=majority')
    const db = client.db()

    const reviewsCollection = db.collection('reviews')

    const reviews = await reviewsCollection.find().toArray()

    client.close()

    return {
        props: {
            reviews: reviews.map(review => ({
                author: review.author,
                title: review.title,
                text: review.text,
                id: review._id.toString()
            }))
        },
        revalidate: 10
    };
}



export default HomePage