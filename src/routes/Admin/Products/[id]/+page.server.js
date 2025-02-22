import { db, storage } from '$lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { ref, listAll } from 'firebase/storage';


export async function load({ params }) {
    const { id } = params;

    const docRef = doc(db, 'products', id);
    const categoriesRef = doc(db, 'Categories', 'CategoriesID');
    const imageRef = ref(storage, `products/${id}`);

    
    const docSnapshot = await getDoc(docRef);
    const categoriesSnapshot = await getDoc(categoriesRef);
    const images = await listAll(imageRef);


    if (docSnapshot.exists()) {
        return {
            product: docSnapshot.data(),
            categories: categoriesSnapshot.data().categories,

        }
    }

    
}

