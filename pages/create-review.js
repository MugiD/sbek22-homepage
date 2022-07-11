import { useRouter } from 'next/router'
import NewReviewForm from '../components/reviews/NewReviewForm'

export default function NewReviewPage() {
    const router = useRouter()

    async function addReviewHandler(enteredReviewData) {
        const response = await fetch('/api/new-review', {
            method: 'POST',
            body: JSON.stringify(enteredReviewData),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json()

        router.push('/reviews')
    }

    return <NewReviewForm onAddReview={addReviewHandler}/>
}