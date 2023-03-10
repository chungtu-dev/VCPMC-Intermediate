import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";
// import Regist from "./component/Regist";
// import Forms from "./component/common/Forms";
import Profile from "./component/Profile";
import Manage from "./component/Manage";
import Storage from "./component/Storage";
import Setting from "./component/Setting";
import Playlist from "./component/Playlist";
import SetCalendar from "./component/SetCalendar";
import Revenue from "./component/Revenue";
import Support from "./component/Support";

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
          <Route path="/setting" element={<Setting />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/set-calendar" element={<SetCalendar />} />
          <Route path="/revenue" element={<Revenue />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
