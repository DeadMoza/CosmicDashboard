import { db } from "$lib/firebase";
import { getDoc, doc } from "firebase/firestore";


export async function load() {
    const docRef = doc(db, 'Categories', 'CategoriesID');
    const docSnapshot = await getDoc(docRef);
    if(!docSnapshot.exists()) return { Categories: [] }

    return {
        Categories: docSnapshot.data().categories
        
    }
}

