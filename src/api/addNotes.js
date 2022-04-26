import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

const addNotes = async ({ uid, title, isPublic, body }) => {
  try {
    await addDoc(collection(db, "notes"), {
      user: uid,
      title,
      body,
      isPublic,
      created: new Date(),
    });
  } catch (err) {}
};

export { addNotes };
