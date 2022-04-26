import { useEffect, useState } from "react";

import { BrowserRouter as Router, Link } from "react-router-dom";
import "./App.css";
import {
  getTimeLeftForAnniversaryThisYear,
  getDatesForReminder,
} from "./utility/date";

import { collection, query, onSnapshot, where } from "firebase/firestore";
import { db } from "./firebase/firebase";

import useAuth from "./hooks/useAuth";
import Routers from "./routes/Routers";

function App() {
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
    <Router>
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/logout">Logout</Link>
        <Link to="/login">Login</Link>
        <Routers />

        {JSON.stringify(user)}
      </div>
    </Router>
  );
}

export default App;
