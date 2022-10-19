import './App.css';
import './views/signIn/signIn';
import SignIn from './views/signIn/signIn';
import {Routes, Route } from "react-router-dom";
import SignUp from './views/signUp/signUp';
import Congratulation from './views/congrats/congratulation';
import PassManager from './views/passManager/passManager';


function App() {
  return (
    
    <div>
      <Routes> <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/congratulation" element={<Congratulation />} />
          <Route path="/passManager" element={<PassManager/>} /></Routes>
    </div>
  );
}

export default App;
