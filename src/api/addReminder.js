import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

const addReminder = async ({ uid, title, date, remindBefore }) => {
  try {
    await addDoc(collection(db, "reminders"), {
      user: uid,
      title,
      date,
      remindBefore,
      created: new Date(),
    });
  } catch (err) {}
};

export { addReminder };
