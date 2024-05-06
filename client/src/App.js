import "./App.css";
import HomePage from "./pages/HomePage";
import Login from './authentication/Login.js';
import SignUp from './authentication/SignUp.js';
import Error from './others/Error';
import { Routes, Route,BrowserRouter as Router } from "react-router-dom"
import PropertyForm from "./pages/PropertyForm.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/form' element={<PropertyForm/>} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;

