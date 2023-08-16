import { DB } from "./firestore";

import { addDoc, collection, getDoc, doc } from "firebase/firestore";

//Crear una orden con los productos del carrito
export async function createOrder(order) {
  const collectionRef = collection(DB, "orders");
  const docOrder = await addDoc(collectionRef, order);
  return docOrder.id;
}

//Traer un documento por idOrder
export async function returnSingleOrder(idOrder) {
  const collectionOrderRef = doc(DB, "orders", idOrder);
  const documentSnapshot = await getDoc(collectionOrderRef);

  if (!documentSnapshot.data()) {
    return null;
  }

  const info = {
    ...documentSnapshot.data(),
  };
  return info;
}
