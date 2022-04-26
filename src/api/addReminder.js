import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const addReminder = async ({ title, date, remindBefore }) => {
  try {
    await addDoc(collection(db, "reminders"), {
      title,
      date,
      remindBefore,
      created: new Date(),
    });
  } catch (err) {}
};

export { addReminder };
