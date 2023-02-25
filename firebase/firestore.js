import { collection, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore"
import { firestore } from "./firebase-setup"

export async function addEntries(data) {
    try {
      await addDoc(collection(firestore, "entries"), data);
    } catch (err) {
      console.log(err);
    }
  }

export async function deleteEntries(id) {
    try {
      await deleteDoc(doc(firestore, "entries", id));
    } catch (err) {
      console.log(err);
    }
  }

export async function updateEntries(id, data) {
    try {
      await updateDoc(doc(firestore, "entries", id), data);
    } catch (err) {
      console.log(err);
    }
  }