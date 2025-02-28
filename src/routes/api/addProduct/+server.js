import { json } from '@sveltejs/kit';
import { db, storage } from '$lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

// Upload data to database
export async function POST({ request }) {
    try {// Debugging stuff
    
        const formData = await request.formData();

        const productName = formData.get('productName');
        const productPrice = formData.get('productPrice');
        const productQuantity = formData.get('productQuantity');
        const productCategory = formData.get('productCategory');
        const productColor = formData.get('productColor');
        const productDescription = formData.get('productDescription');
        const files = formData.getAll('images');

        const productID = productName + " " + productColor;

        let imageUrls = [];

        for(let file of files) {
            const storageRef = ref(storage, `products/${productID}/${file.name}`);
            const metadata = {
                contentType: file.type || 'image/jpg'
            }
            const storageSnapshot = await uploadBytes(storageRef, file, metadata);
            const downloadUrl = await getDownloadURL(storageSnapshot.ref);
            imageUrls.push(downloadUrl);
            

        }
        

        // Grab the products collection from db
        const docRef = doc(db, "products", productID);
        await setDoc(docRef, {
            name: productName,
            price: parseInt(productPrice),
            quantity: parseInt(productQuantity),
            category: productCategory,
            color: productColor,
            description: productDescription,
            images: imageUrls,

        });

        // api request needs to return a json object
        return json({message: "document set"})
    
    } catch (error) {
        console.log(error);
        return json({ error: 'Failed to upload data.' }, { status: 500 });

    }
}