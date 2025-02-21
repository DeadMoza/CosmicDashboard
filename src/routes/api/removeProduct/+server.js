import { json } from '@sveltejs/kit';
import { db, storage } from '$lib/firebase';
import { doc, deleteDoc } from 'firebase/firestore';
import { ref, deleteObject, listAll} from 'firebase/storage';

export async function DELETE({ request }) {
    try {
        const { productID } = await request.json();
        console.log(productID);
        await deleteDoc(doc(db, 'products', productID));
        const storageRef = ref(storage, `products/${productID}`);

        const images = await listAll(storageRef);
        const deletionPromise = images.items.map((file) => deleteObject(file));

        await Promise.all(deletionPromise);

        return json({message: "Product deleted successfully"}); 
    } catch (error) {
        console.log("Error with DELETE api call: ", error);

        return json({message: "error"});

    }
}