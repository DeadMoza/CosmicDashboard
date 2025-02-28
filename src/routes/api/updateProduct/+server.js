import { db, storage } from '$lib/firebase';
import { doc, deleteDoc, updateDoc, setDoc, arrayUnion } from 'firebase/firestore';
import { ref, listAll, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
    try {
        const formData = await request.formData();

        const productName = formData.get('productName');
        const productPrice = formData.get('productPrice');
        const productQuantity = formData.get('productQuantity');
        const productCategory = formData.get('productCategory');
        const productColor = formData.get('productColor');
        const productDescription = formData.get('productDescription');
        const oldProductID = formData.get("oldProductID")
        const images = formData.getAll('images');
        
        let urls = [];

        const newProductID = productName + " " + productColor;

        console.log("Old ID :", oldProductID);
        console.log("new ID: ", newProductID);
        console.log("create new document? :", oldProductID != newProductID);
        console.log("FILES: ", images);

        console.log("Product Information:\n", formData);

        if (oldProductID == newProductID) {
            for(let file of images) {
                const storageRef = ref(storage, `products/${oldProductID}/${file.name}`);
                const metadata = {
                    contentType: file.type || 'image/jpeg'
                };
                const upload = await uploadBytes(storageRef, file, metadata);

                urls.push(await getDownloadURL(upload.ref));

            }

            const docRef = doc(db, 'products', oldProductID);
            await updateDoc(docRef, {
                name: productName,
                price: parseInt(productPrice),
                quantity: parseInt(productQuantity),
                category: productCategory,
                color: productColor,
                description: productDescription,
                images: arrayUnion(...urls) 

            });

            return json({message: "product updated"});


        } else {
            const oldStorageRef = ref(storage, `products/${oldProductID}`);
            const oldFiles = await listAll(oldStorageRef);
            
            for(let file of images) {
                const storageRef = ref(storage, `products/${newProductID}/${file.name}`);
                const metadata = {
                    contentType: file.type || 'image/jpeg'
                }
                const upload = await uploadBytes(storageRef, file, metadata);
                
                urls.push(await getDownloadURL(upload.ref));
    
            }
            

            
            const docRef = doc(db, 'products', newProductID);
            const deleteDocRef = doc(db, 'products', oldProductID);


            //Delete old data that is no longer in use because of the product ID change
            const deleteOldImages = oldFiles.items.map(fileRef => deleteObject(fileRef));
            await Promise.all(deleteOldImages);
            await deleteDoc(deleteDocRef);

            await setDoc(docRef, {
                name: productName,
                price: parseInt(productPrice),
                quantity: parseInt(productQuantity),
                category: productCategory,
                color: productColor,
                description: productDescription,
                images: urls 

            });

            return json({message: "Updated product with new Id"});
        }



    } catch (error) {
        console.log("Dun goofed: ", error);
        return json({error: "An error has errored: ", error});
    }
}
