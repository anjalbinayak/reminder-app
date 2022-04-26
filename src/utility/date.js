const timeLeft = (date) => {
  const total = Date.parse(date) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
};

const fullDateIntoParts = (fulldate) => {
  let parts = fulldate.split("-");

  return {
    year: parts[0],
    month: parts[1],
    day: parts[2],
  };
};

const getTimeLeftForAnniversaryThisYear = (date) => {
  const { lastyear, month, day } = fullDateIntoParts(date);
  const anniversaryDateThisYear = `${new Date().getFullYear()}-${month}-${day}`;
  return timeLeft(anniversaryDateThisYear);
};

const getDatesForReminder = (dates) => {
  const today = new Date().getTime();
  const reminderDates = [];

  for (let i = 0; i < dates.length; i++) {
    const eventDate = new Date(getAnniversaryDate(dates[i].date)).getTime();
    const dateTobeStartReminding = new Date(
      eventDate - dates[i].remindBefore * 24 * 60 * 60 * 1000
    );
    if (today > dateTobeStartReminding && today < eventDate) {
      reminderDates.push(dates[i]);
    }
  }

  return reminderDates;
};

const getAnniversaryDate = (date) => {
  const { lastyear, month, day } = fullDateIntoParts(date);
  const anniversaryDateThisYear = `${new Date().getFullYear()}-${month}-${day}`;
  return anniversaryDateThisYear;
};

export { getTimeLeftForAnniversaryThisYear, getDatesForReminder };
