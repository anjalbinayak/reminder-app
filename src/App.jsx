import { BrowserRouter as Router, Link } from "react-router-dom";
import "./App.css";

import useAuth from "./hooks/useAuth";
import Navbar from "./layout/Navbar";
import Routers from "./routes/Routers";

function App() {
  const { user, isLoggedIn } = useAuth();

  return (
    <Router>
      <Navbar>
        <Routers />
      </Navbar>
    </Router>
  );
}

export default App;
