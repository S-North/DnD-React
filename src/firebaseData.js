import { firestore as db } from './Firebase'
import { onSnapshot, collection, doc, addDoc, setDoc, deleteDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';

export const handleNew = async (firebaseCol, campaign) => {
    console.log(campaign)
    console.log(firebaseCol)
    const collectionRef = collection(db, firebaseCol)
    if (!campaign.id) {
        const payload = {...campaign, created: serverTimestamp(), modified: serverTimestamp()}
        const docRef = await addDoc(collectionRef, payload)
        console.log(docRef.id)
    }
    if (campaign.id) {
        // identify the collection and document 
        const payload = {...campaign, modified: serverTimestamp()}
        const docRef = doc(db, firebaseCol, campaign.id)
        await setDoc(docRef, payload)
    }
}

export const handleDelete = async (collection, id) => {
    console.log(collection)
    const docRef = doc(db, collection, id)  
    await deleteDoc(docRef)
  }