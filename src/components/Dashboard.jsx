import React from "react";
import Onboarding from "../microui/Onboarding";
import useAuth from "../hooks/useAuth";
const Dashboard = () => {
  const { user } = useAuth();
  return <div>{user && <Onboarding />}</div>;
};

export default Dashboard;
