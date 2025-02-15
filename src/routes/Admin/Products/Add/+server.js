import { json } from '@sveltejs/kit';
import { db } from '$lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

// Upload data to database
export async function POST({ request }) {
    try {// Debugging stuff
        const body = await request.text(); // Log the raw request body
        console.log('Request Body:', body);
    
        const { productName, productPrice, productQuantity, productCategory, productDescription } = JSON.parse(body); // No need for this ex: = request.json()

        // Grab the products collection from db
        const snapshot = collection(db, "products");
        await addDoc(snapshot, {
            name: productName,
            price: parseInt(productPrice),
            quantity: parseInt(productQuantity),
            category: productCategory,
            description: productDescription,

        });

        // api request needs to return a json object
        return json({message: "document set"})
    
    } catch (error) {
        console.log(error);
        return json({ error: 'Failed to upload data.' }, { status: 500 });

    }
}