import { db } from "$lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export async function load({ params }) {
    try {
        const orderID = params.orderID;

        const orderRef = doc(db, "orders", orderID);
        const orderSnapshot = await getDoc(orderRef);

        if(orderSnapshot.exists()) {
            return {
                ...orderSnapshot.data()
            };
        } else return {
            order: []
        }
    } catch (error) {
        console.log("Error finding order", error);
    }
}