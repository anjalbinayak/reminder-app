import React from "react";

const AddReminder = () => {
  const [title, setTitle] = useState("");
  const [dateOfReminder, setDateOfReminder] = useState("");
  const [remindBefore, setRemindBefore] = useState(1);

  const handleReminderAdd = () => {
    addReminder({
      uid: user.uid,
      title,
      date: dateOfReminder,

      remindBefore,
    });
    setTitle("");
    setDateOfReminder("");
    setRemindBefore(1);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
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
    </div>
  );
};

export default AddReminder;
