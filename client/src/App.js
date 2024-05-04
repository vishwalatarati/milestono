import "./App.css";
import HomePage from "./pages/HomePage";
import Login from './authentication/Login.js';
import SignUp from './authentication/SignUp.js';
import Error from './others/Error';
import { Routes, Route,BrowserRouter as Router } from "react-router-dom"
import PropertyForm1 from "./pages/PropertyForm1.js";
import PropertyForm2 from "./pages/PropertyForm2.js";
import PropertyForm3 from "./pages/PropertyForm3.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/form' element={<PropertyForm1/>} />
          <Route path='/form2' element={<PropertyForm2/>} />
          <Route path='/form3' element={<PropertyForm3/>} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;

