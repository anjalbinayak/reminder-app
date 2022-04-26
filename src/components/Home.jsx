import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return <div>Home</div>;
};

export default Home;
