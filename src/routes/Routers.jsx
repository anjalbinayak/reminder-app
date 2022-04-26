import React from "react";
import { Routes, Route } from "react-router-dom";
import AddReminder from "../components/AddReminderForm";
import Dashboard from "../components/Dashboard";
import Events from "../components/Events";
import Home from "../components/Home";
import Login from "../components/Login";
import Logout from "../components/Logout";
import Notes from "../components/Notes";
import Profile from "../components/Profile";
import Reminders from "../components/Reminders";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/reminders" element={<Reminders />} />
      <Route path="/reminders/add" element={<AddReminder />} />

      <Route path="/profile" element={<Profile />} />
      <Route path="/events" element={<Events />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
};

export default Routers;
