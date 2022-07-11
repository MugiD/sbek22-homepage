import { MongoClient } from 'mongodb'

async function handler(req, res) {
    if(req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://Bek:bbek22bbek22@cluster0.0pz4e.mongodb.net/reviews?retryWrites=true&w=majority')
        const db = client.db()

        const reviewsCollection = db.collection('reviews')
        
        const result = await reviewsCollection.insertOne(data)

        client.close()

        res.status(201).json({message: 'Review inserted'})
    }
}

export default handler