import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";
// import Regist from "./component/Regist";
// import Forms from "./component/common/Forms";
import Profile from "./component/Profile";
import Manage from "./component/Manage";
import Storage from "./component/Storage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/dang-ki" element={<Regist />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/storage" element={<Storage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
