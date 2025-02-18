import { db } from "$lib/firebase";
import { getDoc, setDoc, doc, updateDoc, arrayUnion } from "firebase/firestore";

import { json } from '@sveltejs/kit';

const docRef = doc(db, 'Categories', 'CategoriesID');
const docSnapshot = await getDoc(docRef);

export async function POST({ request }) {
    try {
        //parse request body
        const { newCategory } = await request.json();
        if(!newCategory) return json({ error: "Category name is required" }); 

        if (docSnapshot.exists()) {
            await updateDoc(docRef, {
                categories: arrayUnion(newCategory)

            });
        } else setDoc(docRef, {
            categories: [newCategory]
        });
        
        return json({ message: "Category added!" });

    } catch (error) {

        console.log("Error occured: ", error);
        return json({ error: "Failed to add category" })
    }
}