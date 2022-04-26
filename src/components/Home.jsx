import React from "react";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();
  return (
    <div>
      Home
      {JSON.stringify(user)}
    </div>
  );
};

export default Home;
