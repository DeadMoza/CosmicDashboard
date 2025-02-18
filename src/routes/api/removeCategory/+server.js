import { db } from '$lib/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { json } from '@sveltejs/kit';

export async function DELETE({ request }) {
    try {
        const { category } = await request.json();
        const docRef = doc(db, "Categories", "CategoriesID");
        const docSnapshot = await getDoc(docRef);

        if (!docSnapshot.exists()) {
            return json({ message: "Categories document not found" });

        }

        let categories = docSnapshot.data().categories || [];
        categories = categories.filter(cat => cat != category);

        await updateDoc(docRef, { categories });
        return json({ messgae: "Category deleted!"});
        
    } catch (error) {
        console.log("An error occoured: ", error);
        return json({ message: error.message });
    }
}
