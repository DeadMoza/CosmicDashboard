import { db } from "$lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export async function load() {
    try {
        const ordersCollection = collection(db, "orders");
        const ordersSnapshot = await getDocs(ordersCollection);

        if(ordersSnapshot.empty) return { orders: [] };

        
        const orders = await Promise.all(
            ordersSnapshot.docs.map( async (order) => {
                return {
                    id: order.id,
                    ...order.data()
                };
            })
        );

        return { orders };

    } catch (error) {
        console.log("An error occured while fetching orders,", error);
    }
}