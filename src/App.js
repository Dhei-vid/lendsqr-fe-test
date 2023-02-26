import { Routes, Route } from "react-router-dom";

import Login from "./routes/login/login.form.component";
import Dashboard from "./routes/dashboard/dashboard.component";
import UserDetails from "./routes/userDetails/userDetails.components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="userdetails" element={<UserDetails />} />
    </Routes>
  );
}

// dbConnect();
export default App;
