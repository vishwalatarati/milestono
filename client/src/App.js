import "./App.css";
import HomePage from "./pages/HomePage";
import Login from './authentication/Login.js';
import SignUp from './authentication/SignUp.js';
import Error from './others/Error';
import { Routes, Route,BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/dashboard' element={<HomePage/>} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;

