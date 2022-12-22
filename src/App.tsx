import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";
// import Regist from "./component/Regist";
// import Forms from "./component/common/Forms";
import Profile from "./component/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/dang-ki" element={<Regist />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
