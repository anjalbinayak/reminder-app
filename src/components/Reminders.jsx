import React from "react";
import useAuth from "../hooks/useAuth";

const Reminders = () => {
  const [reminders, setReminders] = useState([]);

  const { user } = useAuth();

  const refreshData = () => {
    if (!user) {
      setReminders([]);
      return;
    }
    const q = query(collection(db, "reminders"), where("user", "==", user.uid));

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
  }, [user]);

  return (
    <div>
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
};

export default Reminders;
