import { DB } from "./firestore";

import {
  addDoc,
  getDocs,
  collection,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";

//Traer un documento por ID
export async function returnProductById(productId) {
  const collectionProductsRef = doc(DB, "Products", productId);
  const documentSnapshot = await getDoc(collectionProductsRef);

  if (!documentSnapshot.data()) {
    return null;
  }

  const product = {
    id: documentSnapshot.id,
    ...documentSnapshot.data(),
  };

  return product;
}

//get all documents by categry
export async function returnItemsByCategory(idCategory) {
  const collectionProductsRef = collection(DB, "Products");
  const q = query(collectionProductsRef, where("categoryId", "==", idCategory));
  const querySnapshot = await getDocs(q);
  const productsArray = querySnapshot.docs.map((document) => {
    return { id: document.id, ...document.data() };
  });

  if (productsArray.length <= 0) {
    return null;
  }

  return productsArray;
}

//Create one product
export async function createProduct(product) {
  const collectionRef = collection(DB, "Products");
  const docOrder = await addDoc(collectionRef, product);
  return docOrder.id;
}
