import { useEffect, useState } from "react";
import { addReminder } from "./api/addReminder";

import "./App.css";
import {
  getTimeLeftForAnniversaryThisYear,
  getDatesForReminder,
} from "./utility/date";

import {
  collection,
  query,
  orderBy,
  onSnapshot,
  arrayRemove,
} from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [reminders, setReminders] = useState([]);
  const [title, setTitle] = useState("");
  const [dateOfReminder, setDateOfReminder] = useState("");

  const [remindBefore, setRemindBefore] = useState(1);
  const refreshData = () => {
    const q = collection(db, "reminders");

    onSnapshot(q, (querySnapchot) => {
      let ar = [];
      querySnapchot.docs.forEach((doc) => {
        ar.push({ id: doc.id, ...doc.data() });
      });
      setReminders(ar);
    });
  };
  useEffect(() => {
    refreshData();
  });

  const handleReminderAdd = () => {
    addReminder({
      title,
      date: dateOfReminder,

      remindBefore,
    });
    setTitle("");
    setDateOfReminder("");
    setRemindBefore(1);
  };
  return (
    <div className="App">
      <input
        type="text"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />{" "}
      <br />
      <input
        type="date"
        placeholder="Date"
        value={dateOfReminder}
        onChange={(e) => setDateOfReminder(e.target.value)}
      />
      <br />
      <input
        type="number"
        value={remindBefore}
        placeholder={`Remind before __ days`}
        onChange={(e) => setRemindBefore(e.target.value)}
        min="1"
      />
      <button disabled={!dateOfReminder} onClick={() => handleReminderAdd()}>
        Add
      </button>
      <hr />
      {getDatesForReminder(reminders).map((reminder) => (
        <div key={reminder.id}>
          <b>{reminder.title}</b> {reminder.date}
          <small>
            {" "}
            {" " +
              getTimeLeftForAnniversaryThisYear(reminder.date).days +
              "day(s) left"}
          </small>
          <hr />
          <br />
        </div>
      ))}
    </div>
  );
}

export default App;
