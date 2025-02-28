import { db } from '$lib/firebase';
import { doc, getDoc } from 'firebase/firestore';



export async function load({ params }) {
    const { id } = params;

    const docRef = doc(db, 'products', id);
    const categoriesRef = doc(db, 'Categories', 'CategoriesID');
    
    
    const docSnapshot = await getDoc(docRef);
    const categoriesSnapshot = await getDoc(categoriesRef);
    
    if (docSnapshot.exists()) {
        return {
            id: id,
            product: docSnapshot.data(),
            categories: categoriesSnapshot.data().categories,
            

        }
    }

    
}

